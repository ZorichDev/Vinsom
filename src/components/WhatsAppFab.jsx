import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { whatsappLink, DEFAULT_ORDER_TEMPLATE } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {showTooltip && (
        <div
          className="relative flex items-center gap-2 px-4 py-3 rounded-2xl shadow-gold text-sm font-medium animate-fade-up"
          style={{ background: "white", color: "var(--foreground)", boxShadow: "0 8px 32px rgba(15,14,12,0.14)" }}
        >
          <MessageCircle className="h-4 w-4" style={{ color: "var(--whatsapp)" }} />
          <span>Chat with us instantly!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 rounded-full p-0.5 hover:bg-gray-100 transition-colors"
          >
            <X className="h-3 w-3" style={{ color: "var(--muted-foreground)" }} />
          </button>
          {/* Arrow */}
          <span
            className="absolute -bottom-2 right-6 w-3 h-3 rotate-45"
            style={{ background: "white" }}
          />
        </div>
      )}

      <a
        href={whatsappLink(DEFAULT_ORDER_TEMPLATE)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-full animate-ping-gold"
          style={{ background: "var(--whatsapp)" }}
        />
        <span
          className="absolute inset-0 rounded-full animate-ping-gold delay-300"
          style={{ background: "var(--whatsapp)", animationDelay: "0.5s" }}
        />

        {/* Button */}
        <span
          className="relative flex items-center justify-center h-16 w-16 rounded-full text-white shadow-gold-lg transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"
          style={{ background: "var(--whatsapp)" }}
        >
          <MessageCircle className="h-7 w-7" />
        </span>
      </a>
    </div>
  );
}
