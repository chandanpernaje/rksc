export function WaferHeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(111,168,255,0.08)_0%,rgba(7,9,13,0)_70%)]" />

      {/* Engineering SVG Wafer Blueprint */}
      <svg
        viewBox="0 0 1000 1000"
        className="w-[120%] h-[120%] max-w-[1200px] max-h-[1200px] opacity-45 transform-gpu"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waferGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6FA8FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#151A22" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D88A52" stopOpacity="0.4" />
          </linearGradient>

          <pattern id="dieGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="38" height="38" fill="none" stroke="#1F2633" strokeWidth="0.8" />
            <line x1="19" y1="14" x2="19" y2="24" stroke="#6FA8FF" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="14" y1="19" x2="24" y2="19" stroke="#6FA8FF" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>

          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer 300mm Wafer Edge Ring */}
        <circle
          cx="500"
          cy="500"
          r="460"
          fill="none"
          stroke="#1F2633"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <circle
          cx="500"
          cy="500"
          r="450"
          fill="#0D1117"
          fillOpacity="0.7"
          stroke="#6FA8FF"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Die Matrix Fill */}
        <circle cx="500" cy="500" r="440" fill="url(#dieGrid)" />

        {/* Concentric Calibration Tracks */}
        <circle cx="500" cy="500" r="360" fill="none" stroke="#6FA8FF" strokeWidth="0.75" strokeOpacity="0.2" />
        <circle cx="500" cy="500" r="280" fill="none" stroke="#D88A52" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="6 12" />
        <circle cx="500" cy="500" r="200" fill="none" stroke="#6FA8FF" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="500" cy="500" r="100" fill="none" stroke="#A8B0BA" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="2 4" />

        {/* Wafer Notch / Flat Orientation indicator */}
        <path d="M 485 50 L 500 65 L 515 50" fill="none" stroke="#6FA8FF" strokeWidth="2" />
        <text x="500" y="85" textAnchor="middle" fill="#6FA8FF" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="2">
          300mm PRIMARY ORIENTATION
        </text>

        {/* Engineering Crosshairs */}
        <line x1="40" y1="500" x2="960" y2="500" stroke="#6FA8FF" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="8 8" />
        <line x1="500" y1="40" x2="500" y2="960" stroke="#6FA8FF" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="8 8" />

        {/* Central Die Cross-Section Marker */}
        <rect
          x="440"
          y="440"
          width="120"
          height="120"
          fill="#07090D"
          stroke="#6FA8FF"
          strokeWidth="1.5"
          filter="url(#subtleGlow)"
        />
        <rect x="455" y="455" width="40" height="40" fill="#151A22" stroke="#D88A52" strokeWidth="1" />
        <rect x="505" y="455" width="40" height="40" fill="#151A22" stroke="#6FA8FF" strokeWidth="1" />
        <rect x="455" y="505" width="40" height="40" fill="#151A22" stroke="#6FA8FF" strokeWidth="1" />
        <rect x="505" y="505" width="40" height="40" fill="#151A22" stroke="#D88A52" strokeWidth="1" />

        {/* Die Annotations */}
        <text x="440" y="428" fill="#A8B0BA" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1">
          CHIPLET MATRIX [X:48, Y:32]
        </text>
        <text x="565" y="575" fill="#6FA8FF" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1">
          UCIe FABRIC · 16Gbps/lane
        </text>
      </svg>
    </div>
  );
}
