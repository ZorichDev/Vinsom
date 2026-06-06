import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/vinsom-logo.jpeg";
import { whatsappLink, DEFAULT_ORDER_TEMPLATE } from "@/lib/whatsapp";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/interiors", label: "Interiors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Only the home page has a dark hero behind the navbar
  const isHome = pathname === "/";
  // Navbar is "dark mode" only when on home page AND not yet scrolled
  const isDark = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: isDark ? "transparent" : "rgba(250,249,247,0.95)",
          backdropFilter: isDark ? "none" : "blur(24px)",
          WebkitBackdropFilter: isDark ? "none" : "blur(24px)",
          borderBottom: isDark ? "none" : "1px solid rgba(232,227,220,0.7)",
          boxShadow: scrolled ? "0 2px 24px rgba(15,14,12,0.06)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="relative">
              <img
                src={logo}
                alt="Vinsom Concepts"
                className="h-11 w-11 rounded-xl object-cover ring-2 transition-all duration-500 group-hover:ring-[var(--accent)]"
                style={{ ringColor: "var(--border)" }}
              />
              <span
                className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full animate-ping-gold"
                style={{ background: "var(--accent)", opacity: 0.6 }}
              />
              <span
                className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <div
                className="font-bold text-xl tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: isDark ? "white" : "var(--primary)",
                  transition: "color 0.4s ease",
                }}
              >
                Vinsom
              </div>
              <div
                className="text-[9px] uppercase tracking-[0.25em] -mt-0.5 font-medium"
                style={{
                  color: isDark ? "rgba(255,255,255,0.65)" : "var(--muted-foreground)",
                  transition: "color 0.4s ease",
                }}
              >
                Concepts Ltd
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `animated-underline relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "font-semibold" : ""
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--accent)"
                    : isDark
                    ? "rgba(255,255,255,0.85)"
                    : "var(--foreground)",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+234800000000"
              className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                color: isDark ? "rgba(255,255,255,0.8)" : "var(--foreground)",
                border: isDark ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border)",
              }}
            >
              <Phone className="h-3.5 w-3.5" /> +234 800 000 0000
            </a>
            <a
              href={whatsappLink(DEFAULT_ORDER_TEMPLATE)}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-gold btn-glow transition-transform hover:scale-105"
              style={{ background: "var(--whatsapp)" }}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ color: isDark ? "white" : "var(--foreground)" }}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          background: "rgba(15,14,12,0.6)",
          backdropFilter: "blur(4px)",
        }}
        onClick={() => setOpen(false)}
      />
      <div
        className="fixed top-0 right-0 bottom-0 z-40 w-80 lg:hidden transition-transform duration-500 flex flex-col"
        style={{
          background: "var(--background)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-20px 0 60px rgba(15,14,12,0.15)",
        }}
      >
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--border)" }}>
          <span className="font-bold text-xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--primary)" }}>
            Menu
          </span>
          <button onClick={() => setOpen(false)} className="p-2 rounded-xl" style={{ background: "var(--muted)" }}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-4 rounded-2xl font-medium text-base transition-all duration-300 ${
                  isActive ? "font-semibold" : ""
                }`
              }
              style={({ isActive }) => ({
                background: isActive ? "rgba(200,169,110,0.1)" : "transparent",
                color: isActive ? "var(--accent)" : "var(--foreground)",
                animationDelay: `${i * 60}ms`,
              })}
            >
              <span
                className="h-8 w-8 rounded-xl flex items-center justify-center text-xs font-bold"
                style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-6 border-t" style={{ borderColor: "var(--border)" }}>
          <a
            href={whatsappLink(DEFAULT_ORDER_TEMPLATE)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-2xl py-4 font-semibold text-white"
            style={{ background: "var(--whatsapp)" }}
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}