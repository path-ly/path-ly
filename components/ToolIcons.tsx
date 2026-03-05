// Custom SVG icons for specific tools

export function EyeInEyeIcon({ size = 28, color = "#7D8471" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer eye shape */}
      <path d="M2 14 C4 9 8 5 14 5 C20 5 24 9 26 14 C24 19 20 23 14 23 C8 23 4 19 2 14 Z"
        stroke={color} strokeWidth="1.4" fill="none" />
      {/* Outer iris */}
      <circle cx="14" cy="14" r="5" stroke={color} strokeWidth="1.2" fill="#EEF0EB" />
      {/* Inner eye - small eye drawn inside the iris */}
      <path d="M10.5 14 C11.5 12.2 12.5 11.5 14 11.5 C15.5 11.5 16.5 12.2 17.5 14 C16.5 15.8 15.5 16.5 14 16.5 C12.5 16.5 11.5 15.8 10.5 14 Z"
        stroke={color} strokeWidth="1" fill="none" />
      {/* Inner pupil */}
      <circle cx="14" cy="14" r="1.2" fill={color} />
      {/* Highlight */}
      <circle cx="12.8" cy="12.8" r="0.5" fill="white" opacity="0.8" />
    </svg>
  );
}

export function GrowthRulerIcon({ size = 28, color = "#7D8471" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ruler body */}
      <rect x="11" y="4" width="6" height="20" rx="1.5" stroke={color} strokeWidth="1.4" fill="#EEF0EB" />
      {/* Tick marks left side */}
      <line x1="11" y1="8" x2="8" y2="8" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="11" x2="9" y2="11" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="14" x2="8" y2="14" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11" y1="17" x2="9" y2="17" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="20" x2="8" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Upward arrow */}
      <path d="M14 4 L12 7 M14 4 L16 7" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Person figure (child growing) */}
      <circle cx="21" cy="9" r="1.5" fill={color} opacity="0.6" />
      <line x1="21" y1="10.5" x2="21" y2="16" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="21" y1="12" x2="19.5" y2="14" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="21" y1="12" x2="22.5" y2="14" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="21" y1="16" x2="19.8" y2="18.5" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="21" y1="16" x2="22.2" y2="18.5" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function FocusGoodIcon({ size = 28, color = "#7D8471", accent = "#C17F5F" }: { size?: number; color?: string; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Focus circles (concentric) */}
      <circle cx="14" cy="14" r="11" stroke={color} strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <circle cx="14" cy="14" r="7.5" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      {/* Center flower/star */}
      <circle cx="14" cy="14" r="3.5" fill="#FFF8F0" stroke={accent} strokeWidth="1.2" />
      {/* Small petals */}
      <circle cx="14" cy="10" r="1.2" fill={accent} opacity="0.7" />
      <circle cx="14" cy="18" r="1.2" fill={accent} opacity="0.7" />
      <circle cx="10" cy="14" r="1.2" fill={accent} opacity="0.7" />
      <circle cx="18" cy="14" r="1.2" fill={accent} opacity="0.7" />
      {/* Center dot */}
      <circle cx="14" cy="14" r="1.5" fill={accent} />
    </svg>
  );
}

export function CooperationIcon({ size = 28, color = "#7D8471" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gate arch at top */}
      <path d="M7 15 L7 9 Q14 4 21 9 L21 15"
        stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Gate door lines (two doors opening) */}
      <line x1="7" y1="9" x2="7" y2="16" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="21" y1="9" x2="21" y2="16" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      {/* Center gap showing opening */}
      <line x1="14" y1="7" x2="14" y2="15" stroke={color} strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.5" />
      {/* Handshake at bottom */}
      <path d="M5 21 Q9 19 12 20.5 Q14 21.5 16 20.5 Q19 19 23 21"
        stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <line x1="12" y1="20.5" x2="12" y2="23.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="20.5" x2="16" y2="23.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PlantFromRockIcon({ size = 28, color = "#7D8471", accent = "#C17F5F" }: { size?: number; color?: string; accent?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rock shape */}
      <path d="M3 25 L7 18 L11 21 L14 17.5 L17 20 L22 17 L25 25 Z"
        fill="#D8D4CC" stroke={color} strokeWidth="1" strokeLinejoin="round" />
      {/* Crack in rock */}
      <path d="M14 17.5 L13.2 20 L14.5 22.5"
        stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Plant stem growing up */}
      <path d="M14 17.5 C14 17.5 13.5 14 14 10"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Left leaf */}
      <path d="M13.8 14 C11 12 9.5 9.5 10.5 8 C11.5 9 13 12 13.8 14 Z"
        fill={color} opacity="0.75" />
      {/* Right leaf */}
      <path d="M14.2 12 C16.5 10 18.5 7.5 17.5 6 C16.5 7 14.8 10 14.2 12 Z"
        fill={color} />
      {/* Flower at top */}
      <circle cx="14" cy="8.5" r="2.5" fill="#FFF8F0" stroke={accent} strokeWidth="1.2" />
      <circle cx="14" cy="8.5" r="1" fill={accent} />
    </svg>
  );
}
