import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const cities = [
  "Austin", "Round Rock", "Cedar Park", "Georgetown",
  "Pflugerville", "Lakeway", "Bee Cave", "Westlake Hills",
  "Dripping Springs", "Kyle", "Buda", "San Marcos",
];

const ServiceArea = () => (
  <section className="py-20 md:py-28 bg-background">
    <AnimatedSection>
      <div className="container-section">
        <div className="text-center fade-in-up">
          <span className="section-label">Where We Build</span>
          <h2 className="section-heading mt-4 mb-12">
            Proudly Serving Austin & Surrounding Communities
          </h2>
        </div>

        <div className="fade-in-up max-w-4xl mx-auto">
          {/* Map placeholder */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden mb-10 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220759.37290782025!2d-97.89631242187502!3d30.307982700000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BuildRight Homes service area map"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-2 text-foreground font-body">
                <MapPin size={16} className="text-secondary flex-shrink-0" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 fade-in-up">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline-dark"
          >
            Check If We Serve Your Area →
          </button>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default ServiceArea;
