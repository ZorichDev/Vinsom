import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, CheckCircle } from "lucide-react";
import { MarqueeTicker } from "@/components/MarqueeTicker.jsx";
import { whatsappLink } from "@/lib/whatsapp.js";

const UNSPLASH_HERO = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&q=80";

const contactInfo = [
  { icon: MapPin,        label: "Visit Us",      value: "Lagos, Nigeria (Showroom by appointment)", sub: "Nationwide service available" },
  { icon: Phone,         label: "Call Us",        value: "+234 800 000 0000",                        sub: "Mon – Sat, 8am – 6pm" },
  { icon: Mail,          label: "Email Us",       value: "info@vinsomconcepts.com",                  sub: "Reply within 24 hours" },
  { icon: MessageCircle, label: "WhatsApp",       value: "Chat instantly with our team",             sub: "Fastest way to reach us" },
  { icon: Clock,         label: "Working Hours",  value: "Monday – Saturday",                        sub: "8:00 AM – 6:00 PM WAT" },
];

const faqs = [
  { q: "Do you deliver nationwide?",                     a: "Yes! We deliver to all 36 states in Nigeria. Lagos orders can be same-day. Other states take 3–5 business days." },
  { q: "How do I place an order?",                       a: "Simply tap any 'Order on WhatsApp' button on our site, or send us a message directly. We'll confirm your order and payment in minutes." },
  { q: "Do you offer installation services?",            a: "Yes, we offer professional installation services in Lagos and Abuja. For other locations, we can recommend trusted electricians." },
  { q: "What payment methods do you accept?",            a: "We accept bank transfer, Paystack (card), and cash on delivery for Lagos orders." },
  { q: "Do your products come with a warranty?",         a: "Yes. All our products come with a manufacturer warranty. LED fittings typically carry a 1–2 year warranty." },
  { q: "Can you help with interior design too?",         a: "Absolutely. Visit our Interiors page to learn more about our full interior design and fit-out services." },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Vinsom Concepts! 👋

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Subject:* ${form.subject}

*Message:*
${form.message}`;
    window.open(whatsappLink(msg), "_blank");
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img src={UNSPLASH_HERO} alt="Contact us" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(110deg, rgba(13,13,26,0.97) 0%, rgba(26,26,46,0.85) 55%, rgba(26,26,46,0.55) 100%)" }}
          />
          <div className="absolute inset-0 dot-grid opacity-10" />
        </div>
        <div className="absolute top-20 right-20 h-4 w-4 rounded-full animate-float" style={{ background: "var(--accent)", opacity: 0.7 }} />
        <div className="absolute bottom-28 right-1/4 h-3 w-3 rounded-full animate-glow" style={{ background: "var(--accent)", opacity: 0.4 }} />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <span className="section-label animate-fade-up" style={{ color: "var(--accent)" }}>Get In Touch</span>
          <h1
            className="animate-fade-up mt-4 text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.1s" }}
          >
            We'd love to<br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>hear from you.</em>
          </h1>
          <p
            className="animate-fade-up mt-5 text-lg max-w-xl"
            style={{ color: "rgba(255,255,255,0.7)", animationDelay: "0.2s" }}
          >
            Questions, orders, quotes or just want some lighting advice? Reach out — we usually respond on WhatsApp within minutes.
          </p>
        </div>
      </section>

      <MarqueeTicker />

      {/* Contact info cards */}
      <section className="py-20" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactInfo.map((c, i) => (
              <div
                key={c.label}
                className="reveal card p-7 flex items-start gap-4 shimmer-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))",
                    border: "1px solid rgba(200,169,110,0.2)",
                  }}
                >
                  <c.icon className="h-6 w-6" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] mb-1" style={{ color: "var(--accent)" }}>
                    {c.label}
                  </div>
                  <div className="font-semibold text-sm">{c.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{c.sub}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp card - highlighted */}
            <div
              className="reveal card p-7 flex items-center gap-4 sm:col-span-2 lg:col-span-1"
              style={{
                background: "var(--whatsapp)",
                borderColor: "var(--whatsapp)",
                transitionDelay: "400ms",
              }}
            >
              <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-1">Fastest Response</div>
                <div className="font-bold text-white text-lg">Chat on WhatsApp</div>
                <a
                  href={whatsappLink("Hello Vinsom Concepts, I have a question.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs mt-2 text-white/80 hover:text-white transition-colors"
                >
                  Start chat →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-5 gap-10">

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="reveal card p-8 lg:p-10">
              <span className="section-label">Send a Message</span>
              <h2 className="mt-3 text-3xl font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Fill in the form below
              </h2>
              <p className="text-sm mb-8" style={{ color: "var(--muted-foreground)" }}>
                We'll forward your message straight to our WhatsApp for a fast reply.
              </p>

              {sent && (
                <div
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl mb-6 text-sm font-medium"
                  style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#16a34a" }}
                >
                  <CheckCircle className="h-5 w-5" />
                  Opening WhatsApp with your message — we'll reply shortly!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)" }}>
                      Full Name *
                    </label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)" }}>
                      Phone Number *
                    </label>
                    <input
                      name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)" }}>
                    Email Address
                  </label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)" }}>
                    Subject *
                  </label>
                  <select
                    name="subject" required value={form.subject} onChange={handleChange}
                    className="form-input"
                    style={{ cursor: "pointer" }}
                  >
                    <option value="">Select a subject</option>
                    <option>Product Enquiry</option>
                    <option>Place an Order</option>
                    <option>Interior Design Quote</option>
                    <option>Delivery Information</option>
                    <option>Warranty / After-Sales</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)" }}>
                    Message *
                  </label>
                  <textarea
                    name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell us what you need — the more detail, the better we can help..."
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl py-4 font-semibold text-sm text-white transition-transform hover:scale-[1.02] btn-glow"
                  style={{ background: "var(--primary)" }}
                >
                  {sent ? "Message Sent!" : "Send via WhatsApp"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Map placeholder */}
            <div
              className="reveal card overflow-hidden flex-1 flex flex-col items-center justify-center text-center p-10 relative min-h-[280px]"
              style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)" }}
            >
              <div className="absolute inset-0 dot-grid opacity-10" />
              <div
                className="relative h-20 w-20 rounded-full flex items-center justify-center mb-5 animate-float"
                style={{ background: "rgba(200,169,110,0.15)", border: "2px solid rgba(200,169,110,0.3)" }}
              >
                <MapPin className="h-10 w-10" style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="relative text-xl font-bold text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Visit Our Showroom
              </h3>
              <p className="relative text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                Lagos, Nigeria<br />Available by appointment
              </p>
              <a
                href={whatsappLink("Hello Vinsom, I'd like to schedule a showroom visit.")}
                target="_blank"
                rel="noreferrer"
                className="relative mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--whatsapp)" }}
              >
                <MessageCircle className="h-4 w-4" /> Book a Visit
              </a>
            </div>

            {/* Quick WhatsApp options */}
            <div className="reveal card p-6 delay-100">
              <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Quick WhatsApp Actions
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Get a product quote",     msg: "Hello, I'd like a quote for a product." },
                  { label: "Schedule showroom visit", msg: "Hello, I'd like to visit your showroom." },
                  { label: "Interior design consult", msg: "Hello, I'd like an interior design consultation." },
                  { label: "Track my delivery",       msg: "Hello, I'd like to track my order." },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={whatsappLink(item.msg)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-[var(--muted)]"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <MessageCircle className="h-4 w-4 flex-shrink-0" style={{ color: "var(--whatsapp)" }} />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <div className="text-center mb-14">
            <span className="section-label justify-center reveal">FAQ</span>
            <h2
              className="reveal mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight delay-100"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="reveal card overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left font-semibold text-sm transition-colors"
                  style={{ color: openFaq === i ? "var(--accent)" : "var(--foreground)" }}
                >
                  {faq.q}
                  <span
                    className="ml-4 flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-lg transition-transform duration-300"
                    style={{
                      background: openFaq === i ? "var(--accent)" : "var(--muted)",
                      color: openFaq === i ? "var(--foreground)" : "var(--muted-foreground)",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: openFaq === i ? "200px" : "0" }}
                >
                  <p className="px-7 pb-6 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
