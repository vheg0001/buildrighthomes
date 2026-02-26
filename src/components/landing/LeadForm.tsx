import { useState } from "react";
import { CheckCircle, Lock, Phone } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const projectTypes = [
  "Custom Home Build", "Home Renovation", "Room Addition",
  "Kitchen Remodel", "Bathroom Remodel", "Outdoor Living", "Other",
];
const budgets = [
  "Under $50K", "$50K-$100K", "$100K-$250K",
  "$250K-$500K", "$500K+", "Not Sure Yet",
];
const timelines = [
  "ASAP", "Within 1 Month", "1-3 Months", "3-6 Months", "Just Exploring",
];

const trustBullets = [
  "100% Free — No Obligation",
  "Response Within 24 Hours",
  "Transparent, Fixed-Price Quote",
  "25+ Years of Expert Advice",
];

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", zip: "",
    projectType: "", budget: "", timeline: "", details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.zip.trim()) errs.zip = "Zip code is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-primary">
        <div className="container-section text-center">
          <div className="max-w-xl mx-auto bg-card rounded-2xl p-12 shadow-2xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Thank You!</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              We received your request. A BuildRight team member will contact you within 24 hours. In the meantime, feel free to call us at{" "}
              <a href="tel:5125550187" className="text-secondary font-bold">(512) 555-0187</a>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <AnimatedSection>
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div className="fade-in-up">
              <h2 className="section-heading-light mb-4">Get Your FREE Project Estimate Today</h2>
              <p className="text-primary-foreground/70 font-body text-lg mb-8 leading-relaxed">
                Tell us about your project and we'll get back to you within 24 hours with a custom estimate — no obligation, no pressure.
              </p>

              <div className="space-y-4 mb-8">
                {trustBullets.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                    <span className="text-primary-foreground font-body">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone size={18} />
                <span className="font-body">Or call us directly: <a href="tel:5125550187" className="text-secondary font-bold">(512) 555-0187</a></span>
              </div>
            </div>

            {/* Right - Form */}
            <div className="fade-in-up bg-card rounded-2xl p-6 md:p-8 shadow-2xl" style={{ transitionDelay: "200ms" }}>
              {/* Step indicator */}
              <div className="flex gap-2 mb-6">
                <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-secondary" : "bg-border"}`} />
                <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-secondary" : "bg-border"}`} />
              </div>
              <p className="text-sm text-muted-foreground mb-6 font-body">Step {step} of 2 — {step === 1 ? "Your Details" : "Project Info"}</p>

              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="(512) 555-0187"
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Zip Code *</label>
                      <input
                        type="text"
                        value={form.zip}
                        onChange={(e) => update("zip", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="78701"
                      />
                      {errors.zip && <p className="text-destructive text-xs mt-1">{errors.zip}</p>}
                    </div>
                    <button type="button" onClick={handleNext} className="btn-primary w-full !py-4">
                      Next: Project Details →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Project Type</label>
                      <select
                        value={form.projectType}
                        onChange={(e) => update("projectType", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select project type...</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Estimated Budget</label>
                      <select
                        value={form.budget}
                        onChange={(e) => update("budget", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select budget range...</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">When do you want to start?</label>
                      <select
                        value={form.timeline}
                        onChange={(e) => update("timeline", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select timeline...</option>
                        {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Tell us about your project</label>
                      <textarea
                        value={form.details}
                        onChange={(e) => update("details", e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Describe your project vision..."
                      />
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(1)} className="btn-outline-dark flex-1 !py-4">
                        ← Back
                      </button>
                      <button type="submit" className="btn-primary flex-1 !py-4">
                        Get My Free Estimate →
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-4 justify-center">
                  <Lock size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground font-body">Your information is 100% secure and will never be shared.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default LeadForm;
