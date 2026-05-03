import { useCounter } from "@/hooks/useCounter.js";

export function StatCounter({ value, suffix = "", label, sublabel }) {
  const { count, ref } = useCounter(value, 2200);

  return (
    <div ref={ref} className="text-center reveal">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div
        className="mt-2 font-semibold text-base"
        style={{ color: "var(--primary-foreground)", opacity: 0.9 }}
      >
        {label}
      </div>
      {sublabel && (
        <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
          {sublabel}
        </div>
      )}
    </div>
  );
}
