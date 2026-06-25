import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, Mail, Instagram, Facebook, Twitter, ArrowRight, Zap } from "lucide-react";
import logo from "@/assets/vinsom-logo.jpg";
import { whatsappLink, DEFAULT_ORDER_TEMPLATE } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Interiors", to: "/interiors" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const categories = [
  "Ceiling Lights", "Chandeliers", "Pendant Lights",
  "Wall Brackets", "Outdoor Lights", "Decorative",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--primary)" }}>
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div
        className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)" }}
      />

      {/* Newsletter strip */}
      <div
        className="relative border-b"
        style={{ borderColor: "rgba(200,169,110,0.15)" }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Zap className="h-5 w-5" style={{ color: "var(--accent)" }} />
                <span
                  className="text-xs font-bold tracking-[0.22em] uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Stay Updated
                </span>
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}
              >
                Get lighting inspiration & exclusive deals
              </h3>
            </div>
            <form
              className="flex w-full lg:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-5 py-3.5 rounded-2xl text-sm font-medium outline-none"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(200,169,110,0.25)",
                  color: "white",
                }}
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm transition-transform hover:scale-105"
                style={{ background: "var(--accent)", color: "var(--foreground)" }}
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img src={logo} alt="Vinsom" className="h-12 w-12 rounded-xl object-cover" />
              <div>
                <div
                  className="font-bold text-2xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}
                >
                  Vinsom
                </div>
                <div className="text-[9px] uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Concepts Ltd
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              Nigeria's trusted source for premium light fittings and interior design. Transforming spaces with elegance since 2019.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(200,169,110,0.2)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.22em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="animated-underline flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.22em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Product Range
            </h4>
            <ul className="space-y-3">
              {categories.map((c) => (
                <li
                  key={c}
                  className="text-sm cursor-pointer transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.22em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "Lagos, Nigeria (Nationwide)" },
                { icon: Phone, text: "+2348038406250" },
                { icon: Mail, text: "info@vinsomconcepts.com" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                  {text}
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink(DEFAULT_ORDER_TEMPLATE)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-2xl text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ background: "var(--whatsapp)" }}
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderColor: "rgba(200,169,110,0.15)", color: "rgba(255,255,255,0.4)" }}
        >
          <p>© 2026 Vinsom Concepts Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full animate-glow" style={{ background: "var(--accent)" }} />
            <span>Premium Lighting & Interiors • Made in Nigeria 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
