import { Flame } from "lucide-react";
import ctaImage from "@/assets/final-cta-home.jpg";

const FinalCTA = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={ctaImage} alt="Luxury home at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative container-section text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
          Your Dream Home Is One Call Away
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-10 max-w-2xl mx-auto">
          Join 500+ Austin families who trusted BuildRight Homes to bring their vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button onClick={() => scrollTo("#contact")} className="btn-primary text-lg !px-10 !py-5">
            Get Your Free Estimate
          </button>
          <a href="tel:5125550187" className="btn-outline-light text-lg !px-10 !py-5">
            Call (512) 555-0187
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-secondary font-heading font-bold">
          <Flame size={18} />
          <span>We're currently booking projects for Q2 2025. Spots are limited — secure yours today.</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
