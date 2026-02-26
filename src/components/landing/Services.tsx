import { Home, Hammer, Building2, TreePine, Ruler, Wrench } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Home, title: "Custom Home Building", desc: "From blueprint to move-in day, we build stunning custom homes tailored to your lifestyle and budget." },
  { icon: Hammer, title: "Home Renovations", desc: "Transform your existing space with expert kitchen, bathroom, and whole-home renovations." },
  { icon: Building2, title: "Room Additions", desc: "Need more space? We seamlessly add rooms, second stories, and extensions to your home." },
  { icon: TreePine, title: "Outdoor Living Spaces", desc: "Patios, decks, pergolas, and outdoor kitchens designed for Texas living." },
  { icon: Ruler, title: "Architectural Design", desc: "Our in-house design team helps you visualize and plan every detail before construction begins." },
  { icon: Wrench, title: "Structural Repairs", desc: "Foundation repairs, framing fixes, and structural reinforcements to protect your biggest investment." },
];

const Services = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <AnimatedSection>
        <div className="container-section">
          <div className="text-center fade-in-up">
            <span className="section-label">What We Do</span>
            <h2 className="section-heading mt-4 mb-14">
              Residential Construction Services You Can Count On
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="fade-in-up bg-card rounded-lg p-8 card-hover border border-border group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <s.icon className="text-secondary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-secondary font-medium text-sm group-hover:underline cursor-pointer">Learn More →</span>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <button onClick={() => scrollTo("#contact")} className="btn-primary">
              Ready to Start Your Project? Get a Free Estimate →
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Services;
