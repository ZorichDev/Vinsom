import { useEffect } from "react";

export function useScrollReveal() {}

export function useScrollRevealAll() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Map reveal class → will-animate class
      const map = {
        "reveal":       "will-animate",
        "reveal-left":  "will-animate-left",
        "reveal-right": "will-animate-right",
        "reveal-scale": "will-animate-scale",
      };

      const allEls = [];

      Object.entries(map).forEach(([revealClass, animClass]) => {
        document.querySelectorAll(`.${revealClass}`).forEach((el) => {
          // Add the hidden state class
          el.classList.add(animClass);
          allEls.push(el);
        });
      });

      if (!allEls.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
      );

      allEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }); // runs after every render / route change
}
