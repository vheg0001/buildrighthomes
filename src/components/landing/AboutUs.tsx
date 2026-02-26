import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import teamPhoto from "@/assets/team-photo.jpg";

const features = [
  { title: "On-Time Guarantee", desc: "We commit to your timeline in writing" },
  { title: "Fixed-Price Contracts", desc: "The price we quote is the price you pay" },
  { title: "Weekly Progress Updates", desc: "Photos, videos, and reports every Friday" },
  { title: "5-Year Craftsmanship Warranty", desc: "We stand behind every nail and beam" },
];

const AboutUs = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <AnimatedSection>
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="fade-in-up">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={teamPhoto} alt="BuildRight Homes construction team" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="fade-in-up" style={{ transitionDelay: "200ms" }}>
              <span className="section-label">Why BuildRight Homes?</span>
              <h2 className="section-heading mt-4 mb-6">25 Years of Building Trust, One Home at a Time</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Founded in 1999, BuildRight Homes has been Austin's go-to residential construction partner for over two decades. We're not just builders — we're problem solvers, perfectionists, and proud members of this community. Every home we build carries our reputation, and that's why we treat your project like it's our own.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={22} />
                    <div>
                      <span className="font-heading font-bold text-foreground">{f.title}</span>
                      <span className="text-muted-foreground font-body"> — {f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => scrollTo("#contact")} className="btn-primary">
                Get Your Free Estimate
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutUs;
