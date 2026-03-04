/*
  Isometric illustrations — Linear-style.
  Clean thin strokes, isometric 3D shapes, minimal and elegant.
  Green accent on dark background.
*/

const S = '#7fd10c';
const iconBase = 'absolute pointer-events-none';

/* ───────────────────────────────────────────────────────────
   1 · ENGENHARIA — Isometric laptop / code terminal
   ─────────────────────────────────────────────────────────── */
export function IconEngineering({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" fill="none" className={`${iconBase} ${className}`}>
            {/* === SCREEN — isometric rectangle tilted back === */}
            {/* Screen back panel */}
            <path d="M40,32 L160,32 L160,112 L40,112 Z" stroke={S} strokeWidth="1" opacity="0.30" transform="skewY(-4)" />

            {/* Screen frame — isometric perspective */}
            <path d="M44,40 L100,16 L172,52 L116,76 Z" stroke={S} strokeWidth="1.2" opacity="0.35" />
            {/* Screen depth — thin bottom edge */}
            <line x1="44" y1="40" x2="44" y2="44" stroke={S} strokeWidth="0.8" opacity="0.20" />
            <line x1="116" y1="76" x2="116" y2="80" stroke={S} strokeWidth="0.8" opacity="0.20" />
            <line x1="172" y1="52" x2="172" y2="56" stroke={S} strokeWidth="0.8" opacity="0.20" />
            <path d="M44,44 L116,80 L172,56" stroke={S} strokeWidth="0.8" opacity="0.18" fill="none" />

            {/* Code lines on screen */}
            <line x1="58" y1="30" x2="86" y2="30" stroke={S} strokeWidth="0.6" opacity="0.18" transform="skewX(-20)" />
            <line x1="62" y1="36" x2="100" y2="36" stroke={S} strokeWidth="0.6" opacity="0.15" transform="skewX(-20)" />
            <line x1="66" y1="42" x2="92" y2="42" stroke={S} strokeWidth="0.6" opacity="0.12" transform="skewX(-20)" />
            <line x1="62" y1="48" x2="108" y2="48" stroke={S} strokeWidth="0.6" opacity="0.10" transform="skewX(-20)" />
            <line x1="58" y1="54" x2="82" y2="54" stroke={S} strokeWidth="0.6" opacity="0.08" transform="skewX(-20)" />

            {/* Code bracket accent — </> */}
            <path d="M88,44 L80,50 L88,56" stroke={S} strokeWidth="0.8" opacity="0.22" fill="none" />
            <path d="M104,44 L112,50 L104,56" stroke={S} strokeWidth="0.8" opacity="0.22" fill="none" />
            <line x1="94" y1="42" x2="100" y2="58" stroke={S} strokeWidth="0.6" opacity="0.16" />

            {/* === KEYBOARD BASE — isometric flat panel === */}
            <path d="M28,92 L100,64 L188,100 L116,128 Z" stroke={S} strokeWidth="1" opacity="0.30" />
            {/* Base depth */}
            <line x1="28" y1="92" x2="28" y2="96" stroke={S} strokeWidth="0.6" opacity="0.18" />
            <line x1="116" y1="128" x2="116" y2="132" stroke={S} strokeWidth="0.6" opacity="0.18" />
            <line x1="188" y1="100" x2="188" y2="104" stroke={S} strokeWidth="0.6" opacity="0.18" />
            <path d="M28,96 L116,132 L188,104" stroke={S} strokeWidth="0.6" opacity="0.14" fill="none" />

            {/* Keyboard key rows */}
            <line x1="48" y1="82" x2="164" y2="82" stroke={S} strokeWidth="0.4" opacity="0.08" transform="skewY(10) skewX(-20)" />
            <line x1="50" y1="88" x2="158" y2="88" stroke={S} strokeWidth="0.4" opacity="0.06" transform="skewY(10) skewX(-20)" />
            <line x1="52" y1="94" x2="152" y2="94" stroke={S} strokeWidth="0.4" opacity="0.05" transform="skewY(10) skewX(-20)" />

            {/* Hinge connection */}
            <line x1="70" y1="68" x2="70" y2="76" stroke={S} strokeWidth="0.5" opacity="0.12" />
            <line x1="140" y1="68" x2="140" y2="76" stroke={S} strokeWidth="0.5" opacity="0.12" />

            {/* Small indicator LED */}
            <circle cx="108" cy="18" r="1.5" fill={S} opacity="0.20" />
        </svg>
    );
}

/* ───────────────────────────────────────────────────────────
   2 · DESIGN — Isometric panel with grid + floating elements
   ─────────────────────────────────────────────────────────── */
export function IconDesign({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" fill="none" className={`${iconBase} ${className}`}>
            {/* Main isometric panel */}
            <path d="M30,100 L100,60 L170,100 L100,140 Z" stroke={S} strokeWidth="1.2" opacity="0.35" />

            {/* Grid lines — left-to-right */}
            <line x1="44" y1="104" x2="114" y2="64" stroke={S} strokeWidth="0.5" opacity="0.12" />
            <line x1="58" y1="108" x2="128" y2="68" stroke={S} strokeWidth="0.5" opacity="0.12" />
            <line x1="72" y1="112" x2="142" y2="72" stroke={S} strokeWidth="0.5" opacity="0.12" />
            <line x1="86" y1="116" x2="156" y2="76" stroke={S} strokeWidth="0.5" opacity="0.12" />

            {/* Grid lines — right-to-left */}
            <line x1="56" y1="84" x2="126" y2="124" stroke={S} strokeWidth="0.5" opacity="0.12" />
            <line x1="70" y1="80" x2="140" y2="120" stroke={S} strokeWidth="0.5" opacity="0.12" />
            <line x1="84" y1="76" x2="154" y2="116" stroke={S} strokeWidth="0.5" opacity="0.12" />

            {/* Slim depth edges */}
            <line x1="30" y1="100" x2="30" y2="106" stroke={S} strokeWidth="0.8" opacity="0.20" />
            <line x1="100" y1="140" x2="100" y2="146" stroke={S} strokeWidth="0.8" opacity="0.20" />
            <line x1="170" y1="100" x2="170" y2="106" stroke={S} strokeWidth="0.8" opacity="0.20" />
            <path d="M30,106 L100,146 L170,106" stroke={S} strokeWidth="0.8" opacity="0.18" fill="none" />

            {/* Floating element above — small isometric card */}
            <path d="M60,72 L88,56 L116,72 L88,88 Z" stroke={S} strokeWidth="0.8" opacity="0.22" />
            <path d="M60,72 L60,68 L88,52 L116,68 L116,72" stroke={S} strokeWidth="0.5" opacity="0.12" fill="none" />

            {/* Another floating card — smaller */}
            <path d="M110,54 L128,44 L146,54 L128,64 Z" stroke={S} strokeWidth="0.6" opacity="0.16" />

            {/* Cursor accent */}
            <path d="M136,108 L140,104 L144,108 L140,112 Z" fill={S} opacity="0.18" />
        </svg>
    );
}

/* ───────────────────────────────────────────────────────────
   3 · PRODUTO — Isometric smartphone with floating UI layers
   A phone device with app screens floating above it
   ─────────────────────────────────────────────────────────── */
export function IconProduct({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 240 240" fill="none" className={`${iconBase} ${className}`}>
            {/* === PHONE BODY — isometric rectangle === */}
            {/* Top face */}
            <path d="M90,80 L140,56 L168,72 L118,96 Z" stroke={S} strokeWidth="1.2" opacity="0.35" />
            {/* Left face */}
            <path d="M90,80 L118,96 L118,196 L90,180 Z" stroke={S} strokeWidth="1" opacity="0.25" />
            {/* Right face */}
            <path d="M168,72 L118,96 L118,196 L168,172 Z" stroke={S} strokeWidth="1" opacity="0.30" />
            {/* Bottom edge */}
            <line x1="90" y1="180" x2="118" y2="196" stroke={S} strokeWidth="0.8" opacity="0.18" />
            <line x1="168" y1="172" x2="118" y2="196" stroke={S} strokeWidth="0.8" opacity="0.18" />

            {/* Screen area on right face (main visible face) */}
            <path d="M162,80 L122,100 L122,182 L162,162 Z" stroke={S} strokeWidth="0.6" opacity="0.18" />

            {/* Screen content lines */}
            <line x1="128" y1="108" x2="156" y2="94" stroke={S} strokeWidth="0.5" opacity="0.14" />
            <line x1="128" y1="116" x2="150" y2="104" stroke={S} strokeWidth="0.5" opacity="0.11" />
            <line x1="128" y1="124" x2="146" y2="114" stroke={S} strokeWidth="0.4" opacity="0.09" />
            {/* Screen button */}
            <path d="M132,138 L148,130 L148,136 L132,144 Z" stroke={S} strokeWidth="0.5" opacity="0.12" />

            {/* Home indicator */}
            <line x1="136" y1="172" x2="152" y2="164" stroke={S} strokeWidth="0.8" opacity="0.15" />

            {/* Camera notch */}
            <circle cx="142" cy="77" r="1.5" stroke={S} strokeWidth="0.5" opacity="0.20" />

            {/* === FLOATING UI CARD 1 — above and left === */}
            <path d="M42,48 L82,28 L110,44 L70,64 Z" stroke={S} strokeWidth="0.8" opacity="0.22" />
            {/* Card depth */}
            <line x1="42" y1="48" x2="42" y2="52" stroke={S} strokeWidth="0.5" opacity="0.14" />
            <line x1="70" y1="64" x2="70" y2="68" stroke={S} strokeWidth="0.5" opacity="0.14" />
            <line x1="110" y1="44" x2="110" y2="48" stroke={S} strokeWidth="0.5" opacity="0.14" />
            <path d="M42,52 L70,68 L110,48" stroke={S} strokeWidth="0.5" opacity="0.12" fill="none" />
            {/* Content lines */}
            <line x1="54" y1="40" x2="76" y2="40" stroke={S} strokeWidth="0.4" opacity="0.10" transform="skewY(-10)" />
            <line x1="56" y1="46" x2="70" y2="46" stroke={S} strokeWidth="0.4" opacity="0.08" transform="skewY(-10)" />

            {/* === FLOATING UI CARD 2 — top right === */}
            <path d="M130,28 L162,14 L186,28 L154,42 Z" stroke={S} strokeWidth="0.7" opacity="0.18" />
            <line x1="130" y1="28" x2="130" y2="31" stroke={S} strokeWidth="0.4" opacity="0.10" />
            <line x1="154" y1="42" x2="154" y2="45" stroke={S} strokeWidth="0.4" opacity="0.10" />
            <line x1="186" y1="28" x2="186" y2="31" stroke={S} strokeWidth="0.4" opacity="0.10" />
            <path d="M130,31 L154,45 L186,31" stroke={S} strokeWidth="0.4" opacity="0.08" fill="none" />

            {/* === FLOATING UI CARD 3 — small, far top === */}
            <path d="M84,14 L108,2 L128,14 L104,26 Z" stroke={S} strokeWidth="0.6" opacity="0.14" />

            {/* Connection lines from cards to phone */}
            <line x1="70" y1="64" x2="94" y2="84" stroke={S} strokeWidth="0.4" strokeDasharray="3 3" opacity="0.08" />
            <line x1="154" y1="42" x2="162" y2="72" stroke={S} strokeWidth="0.4" strokeDasharray="3 3" opacity="0.08" />
            <line x1="104" y1="26" x2="118" y2="56" stroke={S} strokeWidth="0.3" strokeDasharray="3 3" opacity="0.06" />
        </svg>
    );
}

/* ───────────────────────────────────────────────────────────
   4 · INFRAESTRUTURA — Isometric stacked planes
   Parallel rectangular planes stacked with depth
   ─────────────────────────────────────────────────────────── */
export function IconInfra({ className }: { className?: string }) {
    const plane = (yOffset: number, w: number, opacity: number) => {
        const cx = 120;
        const cy = 60 + yOffset;
        const hw = w * 0.866;
        const hh = w * 0.5;
        const depth = 8;
        return (
            <g key={yOffset}>
                <path d={`M${cx},${cy - hh} L${cx + hw},${cy} L${cx},${cy + hh} L${cx - hw},${cy} Z`}
                    stroke={S} strokeWidth="0.8" opacity={opacity} />
                <line x1={cx - hw} y1={cy} x2={cx - hw} y2={cy + depth} stroke={S} strokeWidth="0.6" opacity={opacity * 0.7} />
                <line x1={cx} y1={cy + hh} x2={cx} y2={cy + hh + depth} stroke={S} strokeWidth="0.6" opacity={opacity * 0.7} />
                <line x1={cx + hw} y1={cy} x2={cx + hw} y2={cy + depth} stroke={S} strokeWidth="0.6" opacity={opacity * 0.7} />
                <path d={`M${cx - hw},${cy + depth} L${cx},${cy + hh + depth} L${cx + hw},${cy + depth}`}
                    stroke={S} strokeWidth="0.6" opacity={opacity * 0.6} fill="none" />
            </g>
        );
    };

    return (
        <svg viewBox="0 0 240 240" fill="none" className={`${iconBase} ${className}`}>
            {plane(0, 36, 0.14)}
            {plane(22, 40, 0.18)}
            {plane(44, 44, 0.22)}
            {plane(66, 48, 0.26)}
            {plane(88, 52, 0.30)}
            {plane(110, 56, 0.34)}

            {/* Vertical connector */}
            <line x1="172" y1="62" x2="172" y2="180" stroke={S} strokeWidth="0.4" opacity="0.10" />
            <line x1="120" y1="188" x2="120" y2="30" stroke={S} strokeWidth="0.3" strokeDasharray="4 4" opacity="0.06" />

            {/* Accent ticks */}
            <line x1="70" y1="60" x2="64" y2="60" stroke={S} strokeWidth="0.4" opacity="0.08" />
            <line x1="66" y1="82" x2="60" y2="82" stroke={S} strokeWidth="0.4" opacity="0.08" />
            <line x1="62" y1="104" x2="56" y2="104" stroke={S} strokeWidth="0.4" opacity="0.08" />
            <line x1="58" y1="126" x2="52" y2="126" stroke={S} strokeWidth="0.4" opacity="0.08" />
        </svg>
    );
}

/* ───────────────────────────────────────────────────────────
   5 · ESTRATÉGIA — Isometric compass / navigation instrument
   A compass device representing direction and strategy
   ─────────────────────────────────────────────────────────── */
export function IconStrategy({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 200 200" fill="none" className={`${iconBase} ${className}`}>
            {/* === COMPASS BASE — isometric cylinder === */}
            {/* Top ellipse */}
            <ellipse cx="100" cy="100" rx="60" ry="30" stroke={S} strokeWidth="1.2" opacity="0.35" />
            {/* Bottom ellipse (partially visible) */}
            <path d="M40,112 A60,30 0 0,0 160,112" stroke={S} strokeWidth="0.8" opacity="0.18" />
            {/* Sides */}
            <line x1="40" y1="100" x2="40" y2="112" stroke={S} strokeWidth="0.8" opacity="0.22" />
            <line x1="160" y1="100" x2="160" y2="112" stroke={S} strokeWidth="0.8" opacity="0.22" />

            {/* Inner ring */}
            <ellipse cx="100" cy="100" rx="44" ry="22" stroke={S} strokeWidth="0.7" opacity="0.20" />
            {/* Inner inner ring */}
            <ellipse cx="100" cy="100" rx="28" ry="14" stroke={S} strokeWidth="0.5" opacity="0.14" />

            {/* Compass cardinal marks — N/S/E/W */}
            {/* N */}
            <line x1="100" y1="70" x2="100" y2="64" stroke={S} strokeWidth="0.8" opacity="0.28" />
            {/* S */}
            <line x1="100" y1="130" x2="100" y2="136" stroke={S} strokeWidth="0.6" opacity="0.16" />
            {/* E */}
            <line x1="160" y1="100" x2="166" y2="100" stroke={S} strokeWidth="0.6" opacity="0.16" />
            {/* W */}
            <line x1="40" y1="100" x2="34" y2="100" stroke={S} strokeWidth="0.6" opacity="0.16" />

            {/* Minor tick marks */}
            <line x1="130" y1="85" x2="134" y2="83" stroke={S} strokeWidth="0.4" opacity="0.10" />
            <line x1="70" y1="85" x2="66" y2="83" stroke={S} strokeWidth="0.4" opacity="0.10" />
            <line x1="130" y1="115" x2="134" y2="117" stroke={S} strokeWidth="0.4" opacity="0.10" />
            <line x1="70" y1="115" x2="66" y2="117" stroke={S} strokeWidth="0.4" opacity="0.10" />

            {/* === NEEDLE — pointing NE direction === */}
            {/* North needle (filled arrow) */}
            <path d="M100,100 L108,78 L104,80 Z" stroke={S} strokeWidth="0.8" opacity="0.35" fill={S} fillOpacity="0.15" />
            <path d="M100,100 L92,78 L96,80 Z" stroke={S} strokeWidth="0.8" opacity="0.30" />
            {/* South needle */}
            <path d="M100,100 L106,120 L100,118 L94,120 Z" stroke={S} strokeWidth="0.6" opacity="0.15" />

            {/* Center pivot */}
            <circle cx="100" cy="100" r="3" stroke={S} strokeWidth="0.8" opacity="0.30" />
            <circle cx="100" cy="100" r="1.2" fill={S} opacity="0.25" />

            {/* === SUPPORT LEGS — three tiny lines below === */}
            <line x1="68" y1="112" x2="62" y2="130" stroke={S} strokeWidth="0.5" opacity="0.10" />
            <line x1="100" y1="130" x2="100" y2="148" stroke={S} strokeWidth="0.5" opacity="0.10" />
            <line x1="132" y1="112" x2="138" y2="130" stroke={S} strokeWidth="0.5" opacity="0.10" />

            {/* Base feet */}
            <ellipse cx="62" cy="132" rx="4" ry="2" stroke={S} strokeWidth="0.4" opacity="0.08" />
            <ellipse cx="100" cy="150" rx="4" ry="2" stroke={S} strokeWidth="0.4" opacity="0.08" />
            <ellipse cx="138" cy="132" rx="4" ry="2" stroke={S} strokeWidth="0.4" opacity="0.08" />

            {/* Decorative outer ring marks */}
            <path d="M52,84 A52,26 0 0,1 62,78" stroke={S} strokeWidth="0.4" opacity="0.08" />
            <path d="M148,84 A52,26 0 0,0 138,78" stroke={S} strokeWidth="0.4" opacity="0.08" />
        </svg>
    );
}

/* ───────────────────────────────────────────────────────────
   6 · DADOS — Isometric bar chart with 3D columns
   ─────────────────────────────────────────────────────────── */
export function IconData({ className }: { className?: string }) {
    const col = (bx: number, by: number, h: number, w: number, op: number) => {
        const hw = w * 0.866;
        const hh = w * 0.5;
        return (
            <g key={`${bx}-${by}`}>
                <path d={`M${bx},${by - h - hh} L${bx + hw},${by - h} L${bx},${by - h + hh} L${bx - hw},${by - h} Z`}
                    stroke={S} strokeWidth="0.8" opacity={op} />
                <path d={`M${bx - hw},${by - h} L${bx},${by - h + hh} L${bx},${by + hh} L${bx - hw},${by} Z`}
                    stroke={S} strokeWidth="0.8" opacity={op * 0.7} />
                <path d={`M${bx + hw},${by - h} L${bx},${by - h + hh} L${bx},${by + hh} L${bx + hw},${by} Z`}
                    stroke={S} strokeWidth="0.8" opacity={op * 0.8} />
            </g>
        );
    };

    return (
        <svg viewBox="0 0 200 200" fill="none" className={`${iconBase} ${className}`}>
            {/* Base grid plane */}
            <path d="M20,148 L100,108 L180,148 L100,188 Z" stroke={S} strokeWidth="0.5" opacity="0.10" />
            <line x1="40" y1="152" x2="120" y2="112" stroke={S} strokeWidth="0.3" opacity="0.06" />
            <line x1="60" y1="156" x2="140" y2="116" stroke={S} strokeWidth="0.3" opacity="0.06" />
            <line x1="80" y1="160" x2="160" y2="120" stroke={S} strokeWidth="0.3" opacity="0.06" />
            <line x1="60" y1="132" x2="140" y2="172" stroke={S} strokeWidth="0.3" opacity="0.06" />
            <line x1="80" y1="124" x2="160" y2="164" stroke={S} strokeWidth="0.3" opacity="0.06" />

            {/* 3D columns */}
            {col(60, 156, 20, 14, 0.22)}
            {col(82, 144, 48, 14, 0.28)}
            {col(104, 132, 72, 14, 0.34)}
            {col(126, 144, 36, 14, 0.26)}
            {col(148, 156, 56, 14, 0.30)}

            {/* Trend line */}
            <path d="M60,131 L82,91 L104,55 L126,103 L148,95"
                stroke={S} strokeWidth="1" opacity="0.20" fill="none" strokeLinejoin="round" />

            {/* Dots */}
            <circle cx="60" cy="131" r="2" fill={S} opacity="0.22" />
            <circle cx="82" cy="91" r="2" fill={S} opacity="0.28" />
            <circle cx="104" cy="55" r="2.5" fill={S} opacity="0.34" />
            <circle cx="126" cy="103" r="2" fill={S} opacity="0.26" />
            <circle cx="148" cy="95" r="2" fill={S} opacity="0.30" />
        </svg>
    );
}
