var fs = require('fs');
var a = 7;
var cos30 = Math.cos(Math.PI / 6);
var dx = a * cos30;
var dy = a * 0.5;
var h = a;
var N = 7;

function lerp(a, b, t) { return Math.round(a + (b - a) * t); }
function kColor(k) {
    var t = k / (N - 1);
    return {
        top: 'rgb(' + lerp(72, 200, t) + ',' + lerp(130, 240, t) + ',' + lerp(20, 90, t) + ')',
        left: 'rgb(' + lerp(55, 127, t) + ',' + lerp(100, 209, t) + ',' + lerp(10, 12, t) + ')',
        right: 'rgb(' + lerp(38, 80, t) + ',' + lerp(70, 148, t) + ',' + lerp(6, 9, t) + ')',
    };
}
function pts(arr) { return arr.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '); }

var defs = '';
for (var kk = 0; kk < N; kk++) {
    var c = kColor(kk);
    var sk = 'stroke="#0d1f03" stroke-opacity="0.4" stroke-width="0.3" stroke-linejoin="round"';
    defs += '<g id="c' + kk + '">';
    defs += '<polygon points="' + pts([[-dx, dy], [0, 2 * dy], [0, 2 * dy + h], [-dx, dy + h]]) + '" fill="' + c.left + '" ' + sk + '/>';
    defs += '<polygon points="' + pts([[dx, dy], [0, 2 * dy], [0, 2 * dy + h], [dx, dy + h]]) + '" fill="' + c.right + '" ' + sk + '/>';
    defs += '<polygon points="' + pts([[0, 0], [dx, dy], [0, 2 * dy], [-dx, dy]]) + '" fill="' + c.top + '" ' + sk + '/>';
    defs += '</g>\n';
}

function toIso(i, j, k) {
    return [(i - j) * dx, (i + j) * dy - k * h];
}

// Left-top corner of the isometric cube: i=0, j=6, k=6
// This is the leftmost point of the top face in screen space
var cornerI = 0, cornerJ = N - 1, cornerK = N - 1;
var cScreen = toIso(cornerI, cornerJ, cornerK);

function distFromCorner(i, j, k) {
    return Math.sqrt(
        Math.pow(i - cornerI, 2) +
        Math.pow(j - cornerJ, 2) +
        Math.pow(k - cornerK, 2)
    );
}

var explodeRadius = 2.8;

var solidCubes = [];
var explodedList = [];

for (var k = 0; k < N; k++) {
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
            var d = distFromCorner(i, j, k);
            var pos = toIso(i, j, k);
            if (d > 0.01 && d < explodeRadius) {
                explodedList.push({ i: i, j: j, k: k, layer: k, dist: d, sx: 0, sy: 0 });
            } else {
                solidCubes.push({ i: i, j: j, k: k, sx: pos[0], sy: pos[1], layer: k });
            }
        }
    }
}

// Sort solid back-to-front
solidCubes.sort(function (a, b) {
    if (a.k !== b.k) return a.k - b.k;
    return (a.i + a.j) - (b.i + b.j);
});

// Sort exploded by distance from corner (closest first = flies furthest)
explodedList.sort(function (a, b) { return a.dist - b.dist; });

// SCATTER EXPLOSION in SCREEN SPACE from the corner point
// The cube body extends to the RIGHT and DOWN from the corner
// The body covers screen angles roughly 330 to 90 degrees from the corner
// SAFE directions: 100 to 320 degrees (220 degree arc)
// This covers: down-left, left, up-left, up
var arcStartDeg = 100;
var arcSpanDeg = 220;
var arcStartRad = arcStartDeg * Math.PI / 180;
var arcSpanRad = arcSpanDeg * Math.PI / 180;

// Golden angle for natural scatter distribution
var golden = 2.399963;

var nExp = explodedList.length;
for (var idx = 0; idx < nExp; idx++) {
    var ec = explodedList[idx];

    // Golden angle spiral for even angular distribution
    var rawAngle = idx * golden;
    var fraction = ((rawAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    fraction = fraction / (2 * Math.PI);
    var angle = arcStartRad + fraction * arcSpanRad;

    // Radius: sqrt growth for uniform area coverage
    // Closest cubes (idx=0) fly furthest out
    var radius = 18 + Math.sqrt(idx + 1) * 11;

    ec.sx = cScreen[0] + Math.cos(angle) * radius;
    ec.sy = cScreen[1] + Math.sin(angle) * radius;
}

// Sort exploded for rendering
explodedList.sort(function (a, b) {
    return (a.sy - a.sx) - (b.sy - b.sx);
});

// Render: solid first, then exploded
var uses = '';
solidCubes.forEach(function (c) {
    uses += '<use href="#c' + c.layer + '" x="' + c.sx.toFixed(1) + '" y="' + c.sy.toFixed(1) + '"/>\n';
});
explodedList.forEach(function (c) {
    uses += '<use href="#c' + c.layer + '" x="' + c.sx.toFixed(1) + '" y="' + c.sy.toFixed(1) + '"/>\n';
});

var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-150 -100 250 200" fill="none">\n' +
    '<defs>\n' +
    defs + '</defs>\n' +
    uses + '</svg>';

fs.writeFileSync('public/data-pyramid.svg', svg);
console.log('Done! ' + solidCubes.length + ' solid + ' + nExp + ' exploded');
