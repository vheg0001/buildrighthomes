import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";
import beforeExterior from "@/assets/before-exterior.jpg";
import afterExterior from "@/assets/after-exterior.jpg";

const comparisons = [
  { before: beforeKitchen, after: afterKitchen, label: "Kitchen Renovation" },
  { before: beforeBathroom, after: afterBathroom, label: "Bathroom Remodel" },
  { before: beforeExterior, after: afterExterior, label: "Home Exterior" },
];

const BeforeAfterSlider = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-lg aspect-[4/3] select-none group">
      {/* After (full) */}
      <img src={after} alt={`${label} after`} className="absolute inset-0 w-full h-full object-cover" />
      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt={`${label} before`} className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${10000 / position}%` }} />
      </div>
      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary-foreground cursor-ew-resize z-10"
        style={{ left: `${position}%` }}
        onMouseDown={(e) => {
          const rect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
          const onMove = (ev: MouseEvent) => {
            const x = ((ev.clientX - rect.left) / rect.width) * 100;
            setPosition(Math.max(5, Math.min(95, x)));
          };
          const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
          };
          window.addEventListener("mousemove", onMove);
          window.addEventListener("mouseup", onUp);
        }}
        onTouchStart={(e) => {
          const rect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
          const onMove = (ev: TouchEvent) => {
            const x = ((ev.touches[0].clientX - rect.left) / rect.width) * 100;
            setPosition(Math.max(5, Math.min(95, x)));
          };
          const onEnd = () => {
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("touchend", onEnd);
          };
          window.addEventListener("touchmove", onMove);
          window.addEventListener("touchend", onEnd);
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground shadow-lg flex items-center justify-center">
          <span className="text-primary text-xs font-bold">⇔</span>
        </div>
      </div>
      {/* Labels */}
      <span className="absolute top-4 left-4 bg-primary/80 text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded">BEFORE</span>
      <span className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground text-xs font-heading font-bold px-3 py-1 rounded">AFTER</span>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/80 text-primary-foreground text-sm font-heading font-bold px-4 py-2 rounded">{label}</p>
    </div>
  );
};

const BeforeAfter = () => (
  <section className="py-20 md:py-28 bg-card">
    <AnimatedSection>
      <div className="container-section">
        <div className="text-center fade-in-up">
          <span className="section-label">Transformations</span>
          <h2 className="section-heading mt-4 mb-14">See the BuildRight Difference</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {comparisons.map((c, i) => (
            <div key={c.label} className="fade-in-up" style={{ transitionDelay: `${i * 150}ms` }}>
              <BeforeAfterSlider {...c} />
            </div>
          ))}
        </div>

        <div className="text-center fade-in-up">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Ready for Your Transformation? →
          </button>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default BeforeAfter;
