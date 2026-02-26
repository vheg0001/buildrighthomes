import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    text: "BuildRight built our forever home and exceeded every expectation. They finished 2 weeks EARLY and the quality is unbelievable. Mike and his team communicated with us every single week. We couldn't be happier!",
    name: "Sarah & James Thompson",
    location: "Lakeway, TX",
  },
  {
    text: "After two bad experiences with other contractors, BuildRight was a breath of fresh air. Transparent pricing, no surprises, and our kitchen renovation looks like it belongs in a magazine.",
    name: "Maria Gonzalez",
    location: "Cedar Park, TX",
  },
  {
    text: "We added a second story to our home and were terrified of the process. BuildRight made it seamless. The team was professional, clean, and respectful of our space. Highly recommend!",
    name: "David & Lisa Chen",
    location: "Round Rock, TX",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <AnimatedSection>
        <div className="container-section">
          <div className="text-center fade-in-up">
            <span className="section-label">What Our Clients Say</span>
            <h2 className="section-heading mt-4 mb-14">
              Don't Take Our Word for It — Hear From Our Happy Homeowners
            </h2>
          </div>

          <div className="fade-in-up max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-secondary fill-secondary" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-foreground font-body leading-relaxed mb-8 italic">
                "{testimonials[active].text}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">{testimonials[active].name}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[active].location}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2 absolute top-8 right-8 md:top-12 md:right-12">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === active ? "bg-secondary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Google badge */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 shadow-sm border border-border">
                <Star size={16} className="text-secondary fill-secondary" />
                <span className="font-body font-medium text-foreground text-sm">4.9 Average Rating on Google</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 fade-in-up">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Join 500+ Happy Homeowners →
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Testimonials;
