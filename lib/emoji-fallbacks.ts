/**
 * Emoji Fallback System
 * 
 * Maps emojis to reliable cross-browser alternatives.
 * Chrome on some Macs fails to render emojis - this provides Unicode/text fallbacks.
 */

export const EMOJI_FALLBACKS: Record<string, string> = {
  // Nature & Plants
  '🌿': '‹✿›',      // leaf → flower brackets
  '🍃': '~',         // leaves → tilde
  '🌊': '≈',         // waves
  
  // Buildings & Locations
  '🏠': '⌂',         // house → home symbol
  '🏫': '⌂',         // school → home symbol
  '📍': '•',         // pin → bullet
  '🌐': '○',         // globe → circle
  
  // Symbols & Objects
  '🎯': '◉',         // target → bullseye
  '🎲': '⚀',         // dice → dice face
  '👣': '👣',        // footprints (keep - it's a pictograph)
  '⏳': '⧗',         // hourglass → hourglass Unicode
  '✨': '✦',         // sparkles → star
  '🫶': '♡',         // heart hands → heart
  '📱': '☎',         // mobile → telephone
  '📚': '≡',         // books → menu/list
  '🎓': '▴',         // graduation cap → triangle up
  '👶': '⚬',         // baby → small circle
  '🔍': '◯',         // magnifying glass → large circle
  '📊': '▭',         // chart → rectangle
  '✦': '✦',         // ornamental sparkle (keep)
  '🕯️': '|',         // candle → vertical line
  '🍽️': '⊙',        // plate → circle with dot
  '💛': '♥',         // yellow heart → heart
  '👁️': '◉',        // eye → bullseye
  '🧠': '◎',         // brain → double circle
  '🛡️': '⌗',        // shield → crosshatch
  '📋': '▭',         // clipboard → rectangle
  '🤝': '⚌',         // handshake → three lines
  '⏰': '◷',         // alarm clock → clock
  '▶': '▸',          // play → triangle
  '⚠️': '⚠',         // warning (keep)
  '💡': '◉',         // light bulb → bullseye
  '🛠️': '⚒',        // tools → hammer and pick
  '1️⃣': '1',         // keycap 1
  '2️⃣': '2',         // keycap 2
  '3️⃣': '3',         // keycap 3
  '4️⃣': '4',         // keycap 4
  '🔧': '⚙',         // wrench → gear
  '🔬': '⚛',         // microscope → atom
  '💬': '◉',         // speech bubble → bullseye
  '✍️': '✎',        // writing hand → pencil
  '🇺🇸': 'US',       // US flag
  '🇮🇱': 'IL',       // Israel flag
};

/**
 * Replaces emoji with fallback if it exists in the mapping
 */
export function getEmojiFallback(emoji: string): string {
  return EMOJI_FALLBACKS[emoji] || emoji;
}

/**
 * Replaces all emojis in a string with their fallbacks
 */
export function replaceEmojis(text: string): string {
  return text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F000}-\u{1F0FF}]/gu, (match) => {
    return EMOJI_FALLBACKS[match] || match;
  });
}
