import { Clock, DollarSign, PhoneOff } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const painPoints = [
  {
    icon: Clock,
    title: "Endless Delays",
    description: "Your project keeps getting pushed back with no clear timeline or accountability.",
  },
  {
    icon: DollarSign,
    title: "Budget Blowouts",
    description: "Hidden costs and surprise charges that turn your dream project into a financial nightmare.",
  },
  {
    icon: PhoneOff,
    title: "Zero Communication",
    description: "You're left in the dark, chasing your contractor for updates on YOUR project.",
  },
];

const PainPoints = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pain-points" className="py-20 md:py-28 bg-card">
      <AnimatedSection>
        <div className="container-section text-center">
          <div className="fade-in-up">
            <span className="section-label">Sound Familiar?</span>
            <h2 className="section-heading mt-4 mb-12 max-w-3xl mx-auto">
              Tired of Contractors Who Over-Promise and Under-Deliver?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {painPoints.map((point, i) => (
              <div
                key={point.title}
                className="fade-in-up bg-background rounded-lg p-8 text-center card-hover border border-border"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-5">
                  <point.icon className="text-destructive" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{point.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="fade-in-up">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-body italic">
              "At BuildRight Homes, we believe building your home should be exciting — not stressful. That's why we do things differently."
            </p>
            <button onClick={() => scrollTo("#about")} className="btn-outline-dark">
              See How We're Different →
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default PainPoints;
