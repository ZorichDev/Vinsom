import { Link } from "react-router-dom";
import {
  ArrowRight, MessageCircle, Sparkles, Truck, ShieldCheck,
  Headphones, Lightbulb, Star, Play, ChevronDown, Award,
  CheckCircle, Zap, Globe
} from "lucide-react";
import { products } from "@/data/products.js";
import { whatsappLink, DEFAULT_ORDER_TEMPLATE } from "@/lib/whatsapp.js";
import { ProductCard } from "@/components/ProductCard.jsx";
import { MarqueeTicker } from "@/components/MarqueeTicker.jsx";
import { StatCounter } from "@/components/StatCounter.jsx";
import heroImg from "@/assets/hero-lighting.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import interiorBedroom from "@/assets/interior-bedroom.jpg";
import interiorOffice from "@/assets/interior-office.jpg";

// Unsplash lighting images (free to use)
const EXTRA_IMAGES = {
  luxury:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  modern:   "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=1200&q=80",
  interior: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  pendant:  "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
  showroom: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  lifestyle:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
};

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients", sublabel: "Across Nigeria" },
  { value: 200, suffix: "+", label: "Products", sublabel: "In our catalog" },
  { value: 36,  suffix: "",  label: "States Served", sublabel: "Nationwide delivery" },
  { value: 5,   suffix: "+", label: "Years of Trust", sublabel: "Since 2019" },
];

const features = [
  { icon: Lightbulb, title: "Premium Quality",   desc: "Rigorously tested fittings built for Nigeria's climate and lifestyle." },
  { icon: ShieldCheck, title: "Trusted Brand",   desc: "500+ homes and businesses lit across all 36 states of Nigeria." },
  { icon: Truck, title: "Fast Delivery",          desc: "Same-day Lagos delivery. 3–5 days for other states. Tracked shipments." },
  { icon: Headphones, title: "Expert Support",   desc: "Speak to a real lighting expert on WhatsApp — reply in minutes." },
  { icon: Award, title: "Warranty Included",     desc: "Every product comes with a manufacturer warranty. Shop with confidence." },
  { icon: Zap, title: "Energy Efficient",         desc: "LED solutions that cut your electricity bill by up to 70%." },
];

const testimonials = [
  { name: "Chinedu O.", loc: "Lagos", rating: 5, text: "Absolutely love my new chandelier from Vinsom! The quality is top-tier and delivery was same day. Customer service was amazing too." },
  { name: "Aisha M.", loc: "Abuja", rating: 5, text: "Ordered pendant lights for my kitchen island and they look stunning. WhatsApp ordering was so easy — I got a response in under 2 minutes!" },
  { name: "Tomi B.", loc: "Port Harcourt", rating: 5, text: "They handled both the lighting and interior of my new office. The transformation was beyond what I imagined. Truly professional." },
  { name: "Emeka K.", loc: "Enugu", rating: 5, text: "Second time buying from Vinsom and they never disappoint. Great prices, even better quality. Recommended to all my friends." },
];

const blogPosts = [
  {
    image: EXTRA_IMAGES.luxury,
    category: "Design Tips",
    title: "How to Choose the Right Chandelier for Your Space",
    excerpt: "Size, height, style — learn the three rules that make chandeliers work in any room.",
    date: "Apr 15, 2026",
    readTime: "4 min read",
  },
  {
    image: EXTRA_IMAGES.modern,
    category: "LED Lighting",
    title: "Why LED Lights Are the Smart Choice for Nigerian Homes",
    excerpt: "Save up to 70% on electricity. We break down the numbers and tell you what to buy.",
    date: "Apr 8, 2026",
    readTime: "5 min read",
  },
  {
    image: EXTRA_IMAGES.interior,
    category: "Interiors",
    title: "5 Interior Design Trends Taking Over Nigerian Homes in 2026",
    excerpt: "From warm earthy tones to statement light fixtures — here's what's dominating this year.",
    date: "Mar 28, 2026",
    readTime: "6 min read",
  },
];

const brands = [
  "Philips", "Osram", "Havells", "Syska", "Wipro", "Bajaj", "Crompton", "Honeywell"
];

const processSteps = [
  { n: "01", title: "Browse Catalog",    desc: "Explore our full range of lights and interiors online." },
  { n: "02", title: "WhatsApp Order",    desc: "Tap any Order button to chat directly with our team." },
  { n: "03", title: "Confirm & Pay",     desc: "We confirm your order and accept secure payment options." },
  { n: "04", title: "Delivered to You",  desc: "Fast, careful delivery to your door. Same-day in Lagos." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury lit interior" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(110deg, rgba(13,13,26,0.97) 0%, rgba(26,26,46,0.88) 50%, rgba(22,33,62,0.55) 100%)",
            }}
          />
          <div className="absolute inset-0 dot-grid opacity-10" />
          <div className="lines-pattern absolute inset-0 opacity-40" />
        </div>

        {/* Floating orbs */}
        <div
          className="absolute top-1/4 right-[15%] w-80 h-80 rounded-full animate-glow pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,169,110,0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/3 right-[8%] h-4 w-4 rounded-full animate-float"
          style={{ background: "var(--accent)", boxShadow: "0 0 20px rgba(200,169,110,0.6)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 h-2.5 w-2.5 rounded-full animate-flicker"
          style={{ background: "var(--accent)", opacity: 0.7 }}
        />
        <div
          className="absolute bottom-40 right-1/3 h-3 w-3 rounded-full animate-float-slow"
          style={{ background: "var(--accent)", opacity: 0.5, animationDelay: "2s" }}
        />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 w-full py-32">
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-3 mb-6">
              <span
                className="badge badge-dark"
                style={{ border: "1px solid rgba(200,169,110,0.35)", color: "var(--accent)" }}
              >
                <Sparkles className="h-3 w-3" /> Nigeria's #1 Lighting Brand
              </span>
              <span className="h-1 w-1 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Est. 2019</span>
            </div>

            <h1
              className="animate-fade-up text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "white", animationDelay: "0.1s" }}
            >
              Light Up Your<br />
              <span
                className="clip-text"
                style={{
                  background: "linear-gradient(135deg, #c8a96e 0%, #f0d898 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                World
              </span>{" "}
              <span style={{ color: "white" }}>in Style.</span>
            </h1>

            <p
              className="animate-fade-up mt-8 text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.75)", animationDelay: "0.2s" }}
            >
              Premium light fittings & interior design solutions for Nigerian homes, offices and businesses. Order instantly on WhatsApp — delivered nationwide.
            </p>

            <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 font-semibold text-sm transition-transform hover:scale-105 btn-glow"
                style={{ background: "var(--accent)", color: "var(--foreground)" }}
              >
                Shop Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink(DEFAULT_ORDER_TEMPLATE)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 font-semibold text-sm text-white transition-transform hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <MessageCircle className="h-4 w-4" style={{ color: "var(--whatsapp)" }} />
                Order on WhatsApp
              </a>
              <Link
                to="/interiors"
                className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <Play className="h-4 w-4" /> View Interiors
              </Link>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-up mt-12 flex items-center gap-6 flex-wrap" style={{ animationDelay: "0.5s" }}>
              {["✅ Same-Day Lagos Delivery", "⭐ 500+ Happy Clients", "🛡️ Quality Guaranteed"].map((b) => (
                <span key={b} className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "rgba(255,255,255,0.35)" }}>
          <ChevronDown className="h-6 w-6" />
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 inset-x-0 h-32" style={{ background: "linear-gradient(to top, var(--background), transparent)" }} />
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeTicker />

      {/* ── FEATURES ── */}
      <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-28">
              <span className="section-label reveal">Why Vinsom</span>
              <h2
                className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Built for spaces that{" "}
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>deserve more.</em>
              </h2>
              <p className="reveal mt-5 leading-relaxed delay-200" style={{ color: "var(--muted-foreground)" }}>
                We don't just sell lights. We help you create environments that inspire, relax and impress — backed by expert advice and Nigeria-fast delivery.
              </p>
              <Link
                to="/about"
                className="reveal group inline-flex items-center gap-2 mt-8 font-semibold text-sm delay-300"
                style={{ color: "var(--accent)" }}
              >
                Our story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="reveal card p-7 shimmer-card"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 transition-transform hover:scale-110 duration-300"
                    style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))", border: "1px solid rgba(200,169,110,0.2)" }}
                  >
                    <f.icon className="h-7 w-7" style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--primary)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(200,169,110,0.15) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((s, i) => (
              <div key={s.label} style={{ transitionDelay: `${i * 100}ms` }}>
                <StatCounter {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-28 lg:py-36 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label reveal">Best Sellers</span>
              <h2
                className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our most loved<br />light fittings.
              </h2>
              <p className="reveal mt-4 max-w-md delay-200" style={{ color: "var(--muted-foreground)" }}>
                Handpicked for their quality, style and value — these are the lights our customers can't stop talking about.
              </p>
            </div>
            <Link
              to="/products"
              className="reveal group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold border transition-all hover:scale-105 delay-300"
              style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--card)";
                e.currentTarget.style.color = "var(--foreground)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              View All Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWCASE / SPLIT ── */}
      <section className="py-28 lg:py-36 overflow-hidden" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image mosaic */}
            <div className="reveal-left relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom rounded-3xl overflow-hidden aspect-[3/4]">
                  <img src={interiorLiving} alt="Living room" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-4 mt-10">
                  <div className="img-zoom rounded-3xl overflow-hidden aspect-square">
                    <img src={interiorBedroom} alt="Bedroom" className="h-full w-full object-cover" />
                  </div>
                  <div className="img-zoom rounded-3xl overflow-hidden aspect-square">
                    <img src={EXTRA_IMAGES.pendant} alt="Pendant" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -right-4 p-5 rounded-2xl shadow-gold"
                style={{ background: "var(--accent)", color: "var(--foreground)" }}
              >
                <div className="text-3xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>4.9/5</div>
                <div className="text-xs font-semibold mt-0.5">Average Rating</div>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="reveal-right">
              <span className="section-label">Interior Design</span>
              <h2
                className="mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We don't just sell lights.<br />
                <em style={{ color: "var(--accent)", fontStyle: "italic" }}>We design spaces.</em>
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                From a single statement chandelier to a complete interior fit-out — Vinsom Concepts delivers end-to-end design and installation for homes, offices and commercial spaces across Nigeria.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Full interior concept & mood boarding",
                  "Furniture sourcing & space planning",
                  "Lighting design & installation",
                  "Project management from start to finish",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex gap-3">
                <Link
                  to="/interiors"
                  className="group inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-sm text-white transition-transform hover:scale-105"
                  style={{ background: "var(--primary)" }}
                >
                  View Portfolio <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={whatsappLink("Hello Vinsom, I'd like to discuss an interior design project.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-sm border transition-colors hover:bg-[var(--muted)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 lg:py-36 relative overflow-hidden" style={{ background: "var(--primary)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div
          className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(200,169,110,0.1) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="section-label justify-center reveal" style={{ color: "var(--accent)" }}>
              Simple Process
            </span>
            <h2
              className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-white delay-100"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Order in 4 easy steps.
            </h2>
            <p className="reveal mt-4 delay-200" style={{ color: "rgba(255,255,255,0.6)" }}>
              From browsing to your doorstep — the whole process is designed to be fast, friendly and hassle-free.
            </p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.n} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div
                  className="p-7 rounded-3xl h-full"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(200,169,110,0.15)",
                  }}
                >
                  <div
                    className="text-6xl font-bold mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--accent)", opacity: 0.8 }}
                  >
                    {step.n}
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-12 -right-3 z-10"
                    style={{ color: "var(--accent)", opacity: 0.4 }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={whatsappLink(DEFAULT_ORDER_TEMPLATE)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-10 py-4 font-semibold text-white transition-transform hover:scale-105 shadow-gold btn-glow"
              style={{ background: "var(--whatsapp)" }}
            >
              <MessageCircle className="h-5 w-5" /> Start Your Order Now
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 lg:py-36 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="section-label reveal">Customer Stories</span>
              <h2
                className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What our customers<br />say about us.
              </h2>
            </div>
            <div className="reveal flex flex-col items-start md:items-end gap-1 delay-200">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-[var(--accent)]" style={{ color: "var(--accent)" }} />
                ))}
              </div>
              <span className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
                4.9 average from 500+ reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="reveal card p-7 shimmer-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[var(--accent)]" style={{ color: "var(--accent)" }} />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t flex items-center gap-3" style={{ borderColor: "var(--border)" }}>
                  <div
                    className="h-11 w-11 rounded-2xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--primary), #16213e)", color: "var(--accent)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs flex items-center gap-1" style={{ color: "var(--muted-foreground)" }}>
                      <Globe className="h-3 w-3" /> {t.loc}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ── */}
      <MarqueeTicker dark />

      {/* ── BLOG PREVIEW ── */}
      <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label reveal">Lighting & Design Blog</span>
              <h2
                className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Tips, trends &<br />inspiration.
              </h2>
            </div>
            <button
              className="reveal group inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold border transition-colors delay-200"
              style={{ borderColor: "var(--border)" }}
            >
              All Articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <article
                key={post.title}
                className="reveal card overflow-hidden group cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="img-zoom aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge badge-gold">{post.category}</span>
                    <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{post.readTime}</span>
                  </div>
                  <h3
                    className="font-bold text-xl leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: "var(--muted-foreground)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t text-xs" style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
                    <span>{post.date}</span>
                    <span
                      className="inline-flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                      style={{ color: "var(--accent)" }}
                    >
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 lg:py-24" style={{ background: "var(--secondary)" }}>
        <div className="mx-auto max-w-6xl px-5 lg:px-10">
          <div
            className="relative overflow-hidden rounded-3xl p-12 md:p-20"
            style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 60%, #16213e 100%)" }}
          >
            <div className="absolute inset-0 dot-grid opacity-10" />
            <div
              className="absolute -top-32 -right-32 w-80 h-80 blob pointer-events-none"
              style={{ background: "rgba(200,169,110,0.12)" }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-60 h-60 blob pointer-events-none"
              style={{ background: "rgba(200,169,110,0.08)", animationDelay: "4s" }}
            />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl text-center lg:text-left">
                <span className="section-label justify-center lg:justify-start" style={{ color: "var(--accent)" }}>
                  Limited Offer
                </span>
                <h2
                  className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Ready to transform<br />
                  <em style={{ color: "var(--accent)", fontStyle: "italic" }}>your space?</em>
                </h2>
                <p className="mt-5 text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Chat with our lighting experts on WhatsApp right now. Free consultation, fast reply, Nigeria-wide delivery.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-fit">
                <a
                  href={whatsappLink(DEFAULT_ORDER_TEMPLATE)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl px-10 py-4 font-semibold text-white shadow-gold btn-glow transition-transform hover:scale-105"
                  style={{ background: "var(--whatsapp)", whiteSpace: "nowrap" }}
                >
                  <MessageCircle className="h-5 w-5" /> Start WhatsApp Order
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 font-semibold text-sm border transition-colors"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    borderColor: "rgba(255,255,255,0.15)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Contact Us Instead
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
