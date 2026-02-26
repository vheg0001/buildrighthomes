import { useEffect, useRef, ReactNode } from "react";

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const children = el.querySelectorAll(".fade-in-up");
      children.forEach((child) => observer.observe(child));
      if (el.classList.contains("fade-in-up")) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

export const AnimatedSection = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
