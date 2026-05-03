import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Palette, Ruler, Sparkles, Home, Building2, Coffee, CheckCircle } from "lucide-react";
import { MarqueeTicker } from "@/components/MarqueeTicker.jsx";
import { whatsappLink } from "@/lib/whatsapp.js";
import living from "@/assets/interior-living.jpg";
import bedroom from "@/assets/interior-bedroom.jpg";
import office from "@/assets/interior-office.jpg";

const UNSPLASH = {
  kitchen:  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  dining:   "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1200&q=80",
  lobby:    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  bathroom: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  outdoor:  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
  retail:   "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
};

const projects = [
  { img: living,          title: "Luxury Living Room",       tag: "Residential",  location: "Lekki, Lagos",    desc: "Layered ambient lighting with statement chandelier and bespoke furniture." },
  { img: bedroom,         title: "Master Suite",             tag: "Residential",  location: "Maitama, Abuja",  desc: "Soft pendants, cove lighting and warm palette for ultimate relaxation." },
  { img: office,          title: "Executive Office",         tag: "Commercial",   location: "Victoria Island",  desc: "Clean lines, glass partitions and precision architectural lighting." },
  { img: UNSPLASH.kitchen,title: "Modern Kitchen",           tag: "Residential",  location: "GRA, Port Harcourt", desc: "Under-cabinet strips and island pendants for function and style." },
  { img: UNSPLASH.dining, title: "Private Dining Room",      tag: "Hospitality",  location: "Ikoyi, Lagos",    desc: "Intimate chandelier arrangement with dimmable warm-white fittings." },
  { img: UNSPLASH.lobby,  title: "Corporate Lobby",          tag: "Commercial",   location: "Abuja",           desc: "Grand reception lighting design that makes every first impression count." },
  { img: UNSPLASH.bathroom,"title": "Spa Bathroom",          tag: "Residential",  location: "Asokoro, Abuja",  desc: "Moisture-proof recessed lights and backlit mirrors for a luxe finish." },
  { img: UNSPLASH.retail, title: "Retail Showroom",          tag: "Commercial",   location: "Ikeja, Lagos",    desc: "Track lighting system highlighting displays and creating customer flow." },
];

const services = [
  {
    icon: Palette,
    title: "Concept & Mood",
    desc: "We translate your vision into a complete design direction — color palettes, material choices, lighting mood boards and layout sketches.",
    features: ["Style consultation", "Mood board creation", "3D visualization", "Material selection"],
  },
  {
    icon: Ruler,
    title: "Space Planning",
    desc: "Functional layouts that make every square meter work harder. We optimize flow, furniture arrangement and lighting zones.",
    features: ["Floor plan analysis", "Furniture placement", "Traffic flow design", "Lighting zone mapping"],
  },
  {
    icon: Sparkles,
    title: "Full Installation",
    desc: "From delivery to the final finishing touch — our team handles everything. Furniture, fittings, fixtures and final styling.",
    features: ["Product sourcing", "Installation & fitting", "Electrical work", "Final dressing & styling"],
  },
];

const spaceTypes = [
  { icon: Home,      label: "Homes",       desc: "Living rooms, bedrooms, kitchens, bathrooms and outdoor spaces." },
  { icon: Building2, label: "Offices",     desc: "Reception areas, workspaces, boardrooms and lobbies." },
  { icon: Coffee,    label: "Hospitality", desc: "Restaurants, hotels, lounges and retail environments." },
];

const tags = ["Residential", "Commercial", "Hospitality", "All"];

export default function InteriorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-20">
        <div className="absolute inset-0">
          <img src={living} alt="Interior design" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(13,13,26,0.98) 0%, rgba(13,13,26,0.6) 50%, rgba(13,13,26,0.2) 100%)" }}
          />
        </div>

        <div className="absolute top-1/3 left-12 animate-float" style={{ color: "rgba(200,169,110,0.5)" }}>
          <Sparkles className="h-6 w-6" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 w-full">
          <div className="max-w-3xl">
            <span className="badge badge-dark animate-fade-up" style={{ border: "1px solid rgba(200,169,110,0.3)", color: "var(--accent)" }}>
              Interior Design & Fit-Out
            </span>
            <h1
              className="animate-fade-up mt-4 text-[clamp(3rem,8vw,6rem)] font-bold text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.1s" }}
            >
              Spaces that tell<br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>your story.</em>
            </h1>
            <p
              className="animate-fade-up mt-6 text-xl max-w-xl"
              style={{ color: "rgba(255,255,255,0.7)", animationDelay: "0.2s" }}
            >
              We design and furnish interiors that pair perfectly with our lighting — for homes, offices and commercial spaces across Nigeria.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
              <a
                href={whatsappLink("Hello Vinsom, I'd like to discuss an interior design project.\n\nProject type: \nLocation: \nBudget range (approx): \n\nPlease get in touch. Thank you.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-sm text-white transition-transform hover:scale-105"
                style={{ background: "var(--accent)", color: "var(--foreground)" }}
              >
                <MessageCircle className="h-4 w-4" /> Request a Quote
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-sm border transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
              >
                View Portfolio <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <MarqueeTicker dark />

      {/* Space types */}
      <section className="py-20" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {spaceTypes.map((s, i) => (
              <div
                key={s.label}
                className="reveal card p-8 flex gap-5 items-start shimmer-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))", border: "1px solid rgba(200,169,110,0.2)" }}
                >
                  <s.icon className="h-7 w-7" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1.5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 lg:py-36 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center reveal">What We Offer</span>
            <h2 className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Design, light & install — under one roof.
            </h2>
            <p className="reveal mt-4 delay-200" style={{ color: "var(--muted-foreground)" }}>
              We handle everything so you don't have to coordinate between multiple contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="reveal card p-8 shimmer-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, var(--primary), #16213e)", boxShadow: "0 8px 32px rgba(26,26,46,0.2)" }}
                >
                  <s.icon className="h-8 w-8 text-white" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-bold text-2xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "var(--accent)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center reveal">Portfolio</span>
            <h2 className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Selected projects.
            </h2>
            <p className="reveal mt-4 delay-200" style={{ color: "var(--muted-foreground)" }}>
              A snapshot of the spaces we've transformed across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 6).map((p, i) => (
              <article
                key={p.title}
                className={`reveal group relative overflow-hidden rounded-3xl cursor-pointer ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`}
                style={{ transitionDelay: `${i * 80}ms`, minHeight: i === 0 ? "540px" : "280px" }}
              >
                <div className="img-zoom h-full">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ minHeight: "inherit" }}
                  />
                </div>

                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500"
                  style={{
                    background: "linear-gradient(to top, rgba(13,13,26,0.95) 0%, rgba(13,13,26,0.4) 50%, transparent 100%)",
                  }}
                >
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge badge-gold">{p.tag}</span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{p.location}</span>
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-20 overflow-hidden" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Extra row */}
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {projects.slice(6).map((p, i) => (
              <article
                key={p.title}
                className="reveal group relative overflow-hidden rounded-3xl cursor-pointer"
                style={{ transitionDelay: `${(i + 6) * 80}ms`, height: "240px" }}
              >
                <div className="img-zoom h-full">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  style={{ background: "linear-gradient(to top, rgba(13,13,26,0.92) 0%, transparent 60%)" }}
                >
                  <span className="badge badge-gold mb-2 w-fit">{p.tag}</span>
                  <h3 className="font-bold text-xl text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{p.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--primary)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div
          className="absolute -top-40 -right-40 w-96 h-96 blob pointer-events-none"
          style={{ background: "rgba(200,169,110,0.1)" }}
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <span className="section-label justify-center" style={{ color: "var(--accent)" }}>Start Your Project</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ready to design<br />your dream space?
          </h2>
          <p className="mt-5 text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Free consultation. No obligation. Just great ideas.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappLink("Hello Vinsom, I'd like a free consultation for an interior design project.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-10 py-4 font-semibold text-white shadow-gold transition-transform hover:scale-105"
              style={{ background: "var(--whatsapp)" }}
            >
              <MessageCircle className="h-5 w-5" /> Free Consultation on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl px-10 py-4 font-semibold text-sm border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)" }}
            >
              Send an Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
