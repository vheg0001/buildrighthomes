import { Phone, ClipboardList, HardHat, KeyRound } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Phone, num: 1, title: "Free Consultation", desc: "Call us or fill out the form. We'll discuss your vision, needs, and budget — completely free." },
  { icon: ClipboardList, num: 2, title: "Custom Proposal", desc: "We create a detailed project plan with transparent pricing. No hidden fees, no surprises." },
  { icon: HardHat, num: 3, title: "Construction Begins", desc: "Our expert crew brings your vision to life. Weekly updates keep you informed every step of the way." },
  { icon: KeyRound, num: 4, title: "Keys in Hand", desc: "Final walkthrough, quality check, and handover. Welcome to your dream home!" },
];

const Process = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-card">
      <AnimatedSection>
        <div className="container-section">
          <div className="text-center fade-in-up">
            <span className="section-label">Simple & Transparent</span>
            <h2 className="section-heading mt-4 mb-16">Your Dream Home in 4 Easy Steps</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative mb-12">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className="fade-in-up text-center relative"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative z-10 w-24 h-24 rounded-full bg-secondary/10 border-4 border-secondary flex items-center justify-center mx-auto mb-6">
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-heading font-bold text-sm flex items-center justify-center">
                    {step.num}
                  </span>
                  <step.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <button onClick={() => scrollTo("#contact")} className="btn-primary">
              Start With Step 1 — It's Free →
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Process;
