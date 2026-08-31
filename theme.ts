/**
 * Meridian's design tokens.
 *
 * Every colour, size, weight, spacing and radius in the product comes from
 * here. `tokens.css` mirrors these values as custom properties, which is what
 * the components actually read — the two files must always say the same thing.
 */

export const colors = {
  brand: { 50: "#EEF2FF", 100: "#E0E7FF", 500: "#6366F1", 600: "#4338CA", 700: "#3730A3" },
  ink: { 900: "#0F172A", 700: "#334155", 500: "#64748B", 300: "#CBD5E1" },
  surface: { base: "#FFFFFF", muted: "#F8FAFC", sunken: "#F1F5F9" },
  positive: "#059669",
  critical: "#DC2626",
}

export const spacing = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 24, 6: 32, 7: 48, 8: 64 }

export const fontSize = { xs: 12, sm: 14, base: 16, lg: 20, xl: 24, "2xl": 32, "3xl": 40 }

export const fontWeight = { regular: 400, medium: 500, semibold: 600, bold: 700 }

export const radius = { none: 0, sm: 4, md: 8, lg: 12, full: 9999 }
