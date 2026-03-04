const fs = require('fs');
const a = 8;
const cos30 = Math.cos(Math.PI / 6);
const sin30 = 0.5;
const dx = a * cos30;
const dy = a * sin30;
const h = a;
const LAYERS = 10;

function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

function layerColors(L) {
    const t = L / (LAYERS - 1);
    return {
        top: 'rgb(' + lerp(82, 190, t) + ',' + lerp(140, 240, t) + ',' + lerp(25, 90, t) + ')',
        left: 'rgb(' + lerp(65, 127, t) + ',' + lerp(110, 209, t) + ',' + lerp(12, 12, t) + ')',
        right: 'rgb(' + lerp(45, 85, t) + ',' + lerp(80, 148, t) + ',' + lerp(8, 9, t) + ')',
    };
}

function pts(arr) {
    return arr.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
}

var defs = '';
for (var L = 0; L < LAYERS; L++) {
    var c = layerColors(L);
    var sk = 'stroke="#1a3005" stroke-opacity="0.35" stroke-width="0.25" stroke-linejoin="round"';
    defs += '<g id="c' + L + '">';
    defs += '<polygon points="' + pts([[-dx, dy], [0, 2 * dy], [0, 2 * dy + h], [-dx, dy + h]]) + '" fill="' + c.left + '" ' + sk + '/>';
    defs += '<polygon points="' + pts([[dx, dy], [0, 2 * dy], [0, 2 * dy + h], [dx, dy + h]]) + '" fill="' + c.right + '" ' + sk + '/>';
    defs += '<polygon points="' + pts([[0, 0], [dx, dy], [0, 2 * dy], [-dx, dy]]) + '" fill="' + c.top + '" ' + sk + '/>';
    defs += '</g>\n';
}

var uses = '';
var count = 0;

for (var L = 0; L < LAYERS; L++) {
    var N = LAYERS - L;
    for (var s = 0; s < 2 * N - 1; s++) {
        for (var i = Math.max(0, s - (N - 1)); i <= Math.min(s, N - 1); i++) {
            var j = s - i;
            var cx = ((i - j) * dx).toFixed(1);
            var cy = ((i + j) * dy - L * a).toFixed(1);
            uses += '<use href="#c' + L + '" x="' + cx + '" y="' + cy + '"/>\n';
            count++;
        }
    }
}

var particles = [
    [-75, -20, 0.4], [78, -15, 0.35], [-62, 50, 0.25], [72, 55, 0.2],
    [-52, -35, 0.3], [58, -30, 0.3], [82, 22, 0.2], [-78, 30, 0.2],
    [0, -44, 0.35], [68, 78, 0.15], [-68, 72, 0.15], [40, -38, 0.25], [-40, -36, 0.25],
];
var extras = '';
particles.forEach(function (p) {
    var px = p[0], py = p[1], op = p[2];
    extras += '<polygon points="' + px + ',' + (py - 2) + ' ' + (px + 2) + ',' + py + ' ' + px + ',' + (py + 2) + ' ' + (px - 2) + ',' + py + '" fill="#7fd10c" opacity="' + op + '"/>\n';
});

var dots = [[-70, -25, 1, 0.25], [74, -20, 1, 0.2], [-57, -38, 0.8, 0.2], [60, -33, 0.8, 0.2], [0, -47, 1.2, 0.3]];
dots.forEach(function (d) {
    extras += '<circle cx="' + d[0] + '" cy="' + d[1] + '" r="' + d[2] + '" fill="#9ae63a" opacity="' + d[3] + '"/>\n';
});

var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -52 180 155" fill="none">\n' +
    '<defs>\n' +
    '<radialGradient id="bg" cx="0" cy="90" r="80" gradientUnits="userSpaceOnUse">\n' +
    '<stop offset="0%" stop-color="#7fd10c" stop-opacity="0.15"/>\n' +
    '<stop offset="100%" stop-color="#7fd10c" stop-opacity="0"/>\n' +
    '</radialGradient>\n' +
    defs +
    '</defs>\n' +
    '<ellipse cx="0" cy="90" rx="72" ry="14" fill="url(#bg)"/>\n' +
    uses + extras + '</svg>';

fs.writeFileSync('public/data-pyramid.svg', svg);
console.log('Done! ' + count + ' cubes');
