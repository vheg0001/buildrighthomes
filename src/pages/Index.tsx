import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Portfolio from "@/components/landing/Portfolio";
import AboutUs from "@/components/landing/AboutUs";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import BeforeAfter from "@/components/landing/BeforeAfter";
import LeadForm from "@/components/landing/LeadForm";
import FAQ from "@/components/landing/FAQ";
import ServiceArea from "@/components/landing/ServiceArea";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FloatingElements from "@/components/landing/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <Portfolio />
      <AboutUs />
      <Stats />
      <Testimonials />
      <BeforeAfter />
      <LeadForm />
      <FAQ />
      <ServiceArea />
      <FinalCTA />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
