import { Sparkles } from "lucide-react";

const items = [
  "Premium Light Fittings",
  "Interior Design",
  "Chandeliers",
  "Pendant Lights",
  "LED Ceiling Lights",
  "Wall Brackets",
  "Outdoor Lighting",
  "Same-Day Lagos Delivery",
  "Nationwide Shipping",
  "WhatsApp Orders",
  "500+ Happy Clients",
  "Quality Guaranteed",
];

export function MarqueeTicker({ dark = false }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="ticker-wrap py-3 overflow-hidden"
      style={{
        background: dark ? "var(--primary)" : "var(--secondary)",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 whitespace-nowrap text-sm font-medium"
            style={{ color: dark ? "rgba(255,255,255,0.75)" : "var(--muted-foreground)" }}
          >
            <Sparkles
              className="h-3 w-3 flex-shrink-0"
              style={{ color: "var(--accent)" }}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
