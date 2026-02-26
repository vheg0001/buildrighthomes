import { AnimatedSection } from "@/hooks/useScrollAnimation";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: p1, name: "The Martinez Residence", type: "Custom Home Build" },
  { img: p2, name: "Lakeway Modern Farmhouse", type: "Custom Home Build" },
  { img: p3, name: "Downtown Austin Condo Renovation", type: "Full Renovation" },
  { img: p4, name: "Cedar Park Family Addition", type: "Room Addition" },
  { img: p5, name: "Round Rock Kitchen Transformation", type: "Kitchen Remodel" },
  { img: p6, name: "Westlake Hills Estate", type: "Custom Home Build" },
];

const Portfolio = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-primary">
      <AnimatedSection>
        <div className="container-section">
          <div className="text-center fade-in-up">
            <span className="section-label">Our Work Speaks for Itself</span>
            <h2 className="section-heading-light mt-4 mb-14">Recent Projects We're Proud Of</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className="fade-in-up group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-heading font-bold text-primary-foreground text-lg">{p.name}</h3>
                    <p className="text-secondary text-sm font-medium">{p.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <button onClick={() => scrollTo("#contact")} className="btn-primary">
              Want Results Like These? Talk to Us →
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Portfolio;
