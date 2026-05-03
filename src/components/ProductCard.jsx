import { MessageCircle, Eye, Star } from "lucide-react";
import { whatsappLink, productOrderMessage } from "@/lib/whatsapp";

export function ProductCard({ product, index = 0 }) {
  return (
    <article
      className="reveal group relative bg-card rounded-3xl overflow-hidden border border-border shimmer-card"
      style={{
        transitionDelay: `${index * 80}ms`,
        boxShadow: "0 4px 24px rgba(15,14,12,0.06)",
        transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 40px 80px rgba(15,14,12,0.16)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(15,14,12,0.06)";
      }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden" style={{ background: "var(--muted)" }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(15,14,12,0.85) 0%, rgba(15,14,12,0.3) 50%, transparent 100%)",
            opacity: 0,
          }}
          ref={(el) => {
            if (el) {
              const parent = el.closest(".group");
              if (parent) {
                parent.addEventListener("mouseenter", () => { el.style.opacity = "1"; });
                parent.addEventListener("mouseleave", () => { el.style.opacity = "0"; });
              }
            }
          }}
        >
          <a
            href={whatsappLink(productOrderMessage(product.name))}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-2xl py-3 font-semibold text-sm text-white transition-transform hover:scale-105"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="h-4 w-4" /> Quick Order
          </a>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span className="badge badge-dark">{product.category}</span>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: "var(--accent)", color: "var(--foreground)" }}
          >
            {product.price}
          </span>
        </div>

        {/* Stars */}
        <div className="absolute bottom-3 left-3 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-[var(--accent)]" style={{ color: "var(--accent)" }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-bold text-xl mb-1.5 group-hover:text-[var(--accent)] transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--foreground)" }}
        >
          {product.name}
        </h3>
        <p className="text-sm mb-4 leading-relaxed line-clamp-2" style={{ color: "var(--muted-foreground)" }}>
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(productOrderMessage(product.name))}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] btn-glow"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="h-4 w-4" /> Order Now
          </a>
          <button
            className="inline-flex items-center justify-center rounded-2xl p-3 border transition-colors hover:bg-[var(--muted)]"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
            title="View details"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        <div
          className="mt-4 pt-4 border-t flex items-center justify-between text-[11px]"
          style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        >
          <span>✅ Instant Reply</span>
          <span>🚚 Nationwide Delivery</span>
          <span>⭐ Trusted Brand</span>
        </div>
      </div>
    </article>
  );
}
