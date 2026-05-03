import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Target, Users, CheckCircle, Quote } from "lucide-react";
import { StatCounter } from "@/components/StatCounter.jsx";
import { MarqueeTicker } from "@/components/MarqueeTicker.jsx";
import bedroom from "@/assets/interior-bedroom.jpg";
import office from "@/assets/interior-office.jpg";

const UNSPLASH = {
  team:    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
  showroom:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
  founder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
};

const stats = [
  { value: 500, suffix: "+", label: "Clients", sublabel: "Happy & repeat" },
  { value: 36,  suffix: "",  label: "States",  sublabel: "Nationwide delivery" },
  { value: 7,   suffix: "+", label: "Years",   sublabel: "In the industry" },
  { value: 200, suffix: "+", label: "Products",sublabel: "In our catalog" },
];

const timeline = [
  { year: "2019", title: "Founded in Lagos", desc: "Vinsom Concepts started as a small light fitting shop in Lagos, serving local homes." },
  { year: "2020", title: "Expanded Online",  desc: "Launched WhatsApp ordering and began nationwide delivery across Nigeria." },
  { year: "2022", title: "Interior Design",  desc: "Added full interior design services, turning us into a one-stop shop." },
  { year: "2024", title: "500+ Clients",     desc: "Crossed the milestone of 500 satisfied clients across all 36 states." },
  { year: "2026", title: "Growing Strong",   desc: "Now Nigeria's most-trusted lighting and interior design brand online." },
];

const values = [
  { icon: Award,     title: "Premium Quality",  desc: "Every product is sourced from trusted manufacturers and tested for Nigerian conditions." },
  { icon: Heart,     title: "Customer First",   desc: "Honest advice, no upselling. We recommend what truly fits your space and budget." },
  { icon: Users,     title: "Expert Team",      desc: "A passionate team of lighting designers and interior specialists ready to help." },
  { icon: Target,    title: "Fair Pricing",     desc: "Premium quality without the premium markup — we price fairly for every Nigerian." },
];

const team = [
  { name: "Emeka Okafor",   role: "Founder & CEO",           img: UNSPLASH.founder },
  { name: "Amaka Nwosu",    role: "Head of Interior Design",  img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
  { name: "Tunde Adeyemi",  role: "Sales & Logistics Lead",   img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img src={UNSPLASH.showroom} alt="Vinsom showroom" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(110deg, rgba(13,13,26,0.97) 0%, rgba(26,26,46,0.82) 60%, rgba(26,26,46,0.5) 100%)" }}
          />
          <div className="absolute inset-0 dot-grid opacity-10" />
        </div>
        <div className="absolute top-24 right-24 h-5 w-5 rounded-full animate-float" style={{ background: "var(--accent)", opacity: 0.7 }} />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <span className="section-label animate-fade-up" style={{ color: "var(--accent)" }}>About Us</span>
          <h1
            className="animate-fade-up mt-4 text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.1s" }}
          >
            Lighting Nigeria<br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>with style & soul.</em>
          </h1>
          <p
            className="animate-fade-up mt-6 text-xl max-w-2xl"
            style={{ color: "rgba(255,255,255,0.7)", animationDelay: "0.2s" }}
          >
            We're a Nigerian-owned lighting and interior design company built on quality, trust and a genuine love for great spaces.
          </p>
        </div>
      </section>

      <MarqueeTicker />

      {/* Mission / Story */}
      <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="relative">
              <div className="img-zoom rounded-3xl overflow-hidden aspect-[4/5]">
                <img src={bedroom} alt="Interior design" className="h-full w-full object-cover" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 p-6 rounded-3xl shadow-gold"
                style={{ background: "var(--accent)", color: "var(--foreground)" }}
              >
                <Quote className="h-8 w-8 mb-2 opacity-50" />
                <p className="font-semibold text-sm leading-snug max-w-[160px]">
                  "Making great lighting accessible to every Nigerian home."
                </p>
                <p className="text-xs mt-2 opacity-70">— Emeka Okafor, Founder</p>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <span className="section-label">Who We Are</span>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              A team obsessed with<br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>great spaces.</em>
            </h2>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Vinsom Concepts Ltd was founded in 2019 with a single mission: to make premium, energy-efficient light fittings accessible to every Nigerian home and business — at prices that make sense.
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              What started as a small Lagos shop has grown into Nigeria's most trusted online lighting brand, serving clients from Kano to Port Harcourt, Enugu to Abuja — with the same commitment to quality and care.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "100% Nigerian-owned and operated",
                "Trained lighting design consultants",
                "End-to-end interior design services",
                "WhatsApp-first customer support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--primary)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div key={s.label} style={{ transitionDelay: `${i * 100}ms` }}>
              <StatCounter {...s} />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 lg:py-36 bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <div className="text-center mb-16">
            <span className="section-label justify-center reveal">Our Journey</span>
            <h2 className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              From a small shop<br />to a national brand.
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div
              className="absolute left-[28px] lg:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, var(--accent), transparent)" }}
            />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`reveal relative flex gap-8 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 flex-shrink-0 h-14 w-14 rounded-2xl flex items-center justify-center text-sm font-bold lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                    style={{
                      background: "var(--accent)",
                      color: "var(--foreground)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {item.year}
                  </div>

                  {/* Content */}
                  <div
                    className={`card p-7 flex-1 lg:w-[calc(50%-3rem)] ${i % 2 === 0 ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"}`}
                  >
                    <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label justify-center reveal">Our Values</span>
            <h2 className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              What makes us different.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal card p-8 shimmer-card text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))", border: "1px solid rgba(200,169,110,0.2)" }}
                >
                  <v.icon className="h-8 w-8" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 lg:py-36 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="section-label justify-center reveal">The Team</span>
            <h2 className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Meet the people<br />behind Vinsom.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <div key={member.name} className="reveal card overflow-hidden group text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="img-zoom aspect-square overflow-hidden">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{member.name}</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "var(--primary)" }}>
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Let's work together.
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Whether it's a single bulb replacement or a complete office fit-out — we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-sm text-white transition-transform hover:scale-105"
              style={{ background: "var(--accent)", color: "var(--foreground)" }}
            >
              Get in Touch <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-sm border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)" }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
