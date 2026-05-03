import { useState } from "react";
import { SlidersHorizontal, Search, MessageCircle } from "lucide-react";
import { ProductCard } from "@/components/ProductCard.jsx";
import { MarqueeTicker } from "@/components/MarqueeTicker.jsx";
import { products, categories } from "@/data/products.js";
import { whatsappLink } from "@/lib/whatsapp.js";

const UNSPLASH_HERO = "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1800&q=80";

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={UNSPLASH_HERO} alt="Product catalog" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(110deg, rgba(13,13,26,0.97) 0%, rgba(26,26,46,0.85) 60%, rgba(26,26,46,0.6) 100%)" }}
          />
          <div className="absolute inset-0 dot-grid opacity-10" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 h-4 w-4 rounded-full animate-float" style={{ background: "var(--accent)", opacity: 0.8 }} />
        <div className="absolute bottom-24 right-1/3 h-3 w-3 rounded-full animate-flicker" style={{ background: "var(--accent)", opacity: 0.5 }} />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <span className="section-label animate-fade-up" style={{ color: "var(--accent)" }}>Full Catalog</span>
          <h1
            className="animate-fade-up mt-4 text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.1s" }}
          >
            Our Products
          </h1>
          <p
            className="animate-fade-up mt-5 text-lg max-w-xl"
            style={{ color: "rgba(255,255,255,0.7)", animationDelay: "0.2s" }}
          >
            Over 200 premium light fittings — for every space, every style and every budget. Browse, pick and order instantly on WhatsApp.
          </p>
        </div>
      </section>

      <MarqueeTicker />

      {/* Filter + Search */}
      <section className="sticky top-18 z-30 py-5 border-b" style={{ background: "rgba(250,249,247,0.92)", backdropFilter: "blur(16px)", borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300"
                style={{
                  background: active === c ? "var(--primary)" : "var(--card)",
                  color: active === c ? "white" : "var(--foreground)",
                  borderColor: active === c ? "var(--primary)" : "var(--border)",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "var(--muted-foreground)" }} />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border outline-none transition-all"
              style={{
                background: "var(--card)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {filtered.length > 0 ? (
            <>
              <p className="text-sm mb-8" style={{ color: "var(--muted-foreground)" }}>
                Showing <strong style={{ color: "var(--foreground)" }}>{filtered.length}</strong> product{filtered.length !== 1 ? "s" : ""}
                {active !== "All" ? ` in ${active}` : ""}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <SlidersHorizontal className="h-12 w-12 mx-auto mb-4" style={{ color: "var(--muted-foreground)" }} />
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>Try a different category or search term.</p>
              <button
                onClick={() => { setActive("All"); setSearch(""); }}
                className="px-6 py-3 rounded-2xl text-sm font-semibold text-white"
                style={{ background: "var(--primary)" }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20" style={{ background: "var(--primary)" }}>
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Can't find what you're looking for?
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Chat with our team on WhatsApp — we source custom fittings and can get almost anything delivered to you.
          </p>
          <a
            href={whatsappLink("Hello Vinsom, I'm looking for a specific light fitting that I couldn't find on your catalog. Can you help?")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
