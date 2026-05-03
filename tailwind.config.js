/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    // All custom utility classes used via className strings
    "reveal", "reveal-left", "reveal-right", "reveal-scale", "visible",
    "bg-gradient-hero", "bg-gradient-gold", "bg-gradient-soft", "bg-gradient-warm", "bg-gradient-dark",
    "text-gradient", "text-gradient-gold",
    "shadow-gold", "shadow-gold-lg", "shadow-card", "shadow-elegant",
    "hover-lift", "glass", "glass-dark",
    "dot-grid", "lines-pattern",
    "h-18", "pt-18",
    "section-label", "gold-bar", "gold-bar-lg",
    "marquee-track", "img-zoom", "blob",
    "btn-glow", "card", "shimmer-card",
    "stat-number", "form-input", "nav-progress",
    "badge", "badge-gold", "badge-dark",
    "ticker-wrap", "animated-underline", "clip-text",
    "animate-fade-up", "animate-fade-in", "animate-fade-left", "animate-scale-in",
    "animate-float", "animate-float-slow", "animate-glow", "animate-flicker",
    "animate-spin-slow", "animate-morph", "animate-ping-gold", "animate-marquee",
    "delay-0","delay-100","delay-150","delay-200","delay-250",
    "delay-300","delay-400","delay-500","delay-600","delay-700","delay-800","delay-1000",
    "bg-background","bg-card","bg-primary","bg-accent","bg-muted","bg-secondary","bg-whatsapp",
    "text-foreground","text-primary","text-primary-foreground","text-accent",
    "text-accent-foreground","text-muted-foreground","text-whatsapp-foreground","text-destructive",
    "border-border","fill-accent",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Outfit", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
