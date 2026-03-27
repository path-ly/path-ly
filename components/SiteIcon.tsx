/**
 * SiteIcon — Inline SVG icon component replacing all Unicode symbols.
 * 
 * Uses lucide-react for consistent, cross-browser rendering.
 * Every icon that was previously a Unicode symbol or emoji is now an SVG.
 */
import {
  Heart,
  HeartHandshake,
  Dices,
  Footprints,
  Hourglass,
  House,
  Shield,
  Brain,
  Search,
  Clock,
  Star,
  Phone,
  Flower2,
  Baby,
  Handshake,
  Hammer,
  Atom,
  AlertTriangle,
  CircleCheck,
  Pencil,
  Check,
  X,
  Sparkles,
  Sparkle,
  Sunrise,
  TreePine,
  Video,
  Clapperboard,
  Music,
  Landmark,
  Users,
  Lightbulb,
  Calendar,
  BookOpen,
  Mail,
  Smartphone,
  Wrench,
  Play,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Clipboard,
  type LucideIcon,
} from 'lucide-react';

// Icon name → Lucide component mapping
const ICON_MAP: Record<string, LucideIcon> = {
  // Tool icons (from tools-data.ts)
  'heart': Heart,
  'heart-hands': HeartHandshake,
  'dice': Dices,
  'footprints': Footprints,
  'hourglass': Hourglass,
  'sparkles': Sparkles,
  'sparkle': Sparkle,
  
  // Navigation & UI
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'chevron-right': ChevronRight,
  'play': Play,
  'check': Check,
  'check-circle': CircleCheck,
  'x': X,
  'alert': AlertTriangle,
  'search': Search,
  
  // Places & objects
  'house': House,
  'building': Landmark,
  'clock': Clock,
  'calendar': Calendar,
  'phone': Phone,
  'smartphone': Smartphone,
  'mail': Mail,
  'pencil': Pencil,
  'wrench': Wrench,
  'hammer': Hammer,
  'shield': Shield,
  'clipboard': Clipboard,
  
  // People & nature
  'baby': Baby,
  'users': Users,
  'handshake': Handshake,
  'brain': Brain,
  'atom': Atom,
  'flower': Flower2,
  'star': Star,
  'sunrise': Sunrise,
  'tree': TreePine,
  'lightbulb': Lightbulb,
  
  // Media
  'video': Video,
  'clapperboard': Clapperboard,
  'music': Music,
  'book': BookOpen,
  
  // Decorative / bullet
  'dot': CircleDot,
};

interface SiteIconProps {
  name: string;
  size?: number;
  className?: string;
  /** aria-hidden by default (decorative). Set to a label string for meaningful icons. */
  label?: string;
}

export default function SiteIcon({ name, size = 18, className = '', label }: SiteIconProps) {
  const IconComponent = ICON_MAP[name];
  
  if (!IconComponent) {
    // Fallback: render nothing rather than a broken symbol
    if (process.env.NODE_ENV === 'development') {
      console.warn(`SiteIcon: unknown icon "${name}"`);
    }
    return null;
  }
  
  return (
    <IconComponent
      size={size}
      className={`site-icon ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label || undefined}
      role={label ? 'img' : undefined}
      strokeWidth={1.75}
    />
  );
}

/**
 * Circled number component — replaces ① ② ③ ④
 */
export function CircledNumber({ n, size = 22, className = '' }: { n: number; size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-semibold ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.55,
        border: '2px solid currentColor',
        lineHeight: 1,
      }}
      aria-hidden="true"
    >
      {n}
    </span>
  );
}
