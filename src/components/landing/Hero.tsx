import { ChevronDown, Star, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Beautiful modern home built by BuildRight Homes in Austin, Texas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container-section pt-24 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6">
            We Build Your Dream Home —{" "}
            <span className="text-secondary">On Time, On Budget,</span> No Surprises
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 max-w-2xl leading-relaxed">
            Austin's most trusted residential construction company with 25+ years of experience building custom homes, renovations, and additions that families love.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={() => scrollTo("#contact")} className="btn-primary text-lg !px-10 !py-5">
              Get Your Free Estimate
            </button>
            <button onClick={() => scrollTo("#portfolio")} className="btn-outline-light text-lg !px-10 !py-5">
              View Our Projects
            </button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Star size={18} className="text-secondary fill-secondary" />
              <span className="text-sm font-medium font-body">4.9/5 on Google (200+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Shield size={18} className="text-secondary" />
              <span className="text-sm font-medium font-body">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle size={18} className="text-secondary" />
              <span className="text-sm font-medium font-body">25+ Years in Business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <button
        onClick={() => scrollTo("#pain-points")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-scroll-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
