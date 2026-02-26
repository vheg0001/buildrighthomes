import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does it cost to build a custom home in Austin?",
    a: "Custom home costs in Austin typically range from $200-$400 per square foot depending on finishes, complexity, and lot conditions. We provide detailed, transparent estimates during your free consultation.",
  },
  {
    q: "How long does a typical home build take?",
    a: "Most custom homes take 8-14 months from groundbreaking to move-in. Renovations typically take 4-12 weeks depending on scope. We provide a detailed timeline before we start.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Absolutely. We handle all permits, inspections, and city/county requirements so you don't have to deal with any red tape.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Austin and the greater Austin metro area including Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Bee Cave, Westlake Hills, and Dripping Springs.",
  },
  {
    q: "Do you offer financing or payment plans?",
    a: "While we don't directly finance, we work with several trusted lending partners and can help guide you through construction loan options.",
  },
  {
    q: "What warranty do you provide?",
    a: "Every BuildRight project comes with our 5-Year Craftsmanship Warranty covering all labor and workmanship. We also assist with manufacturer warranties on all materials.",
  },
  {
    q: "Can I make changes during construction?",
    a: "Yes! We understand plans can evolve. We have a clear change order process with transparent pricing so you always know the impact on cost and timeline.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28 bg-card">
    <AnimatedSection>
      <div className="container-section max-w-3xl">
        <div className="text-center fade-in-up">
          <span className="section-label">Common Questions</span>
          <h2 className="section-heading mt-4 mb-12">Frequently Asked Questions</h2>
        </div>

        <div className="fade-in-up">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left py-5 hover:no-underline hover:text-secondary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10 fade-in-up">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline-dark"
          >
            Still Have Questions? Let's Talk →
          </button>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default FAQ;
