import { MapPin, Phone as PhoneIcon, Mail, Clock } from "lucide-react";

const quickLinks = ["Home", "Services", "Our Work", "About Us", "Contact", "Blog"];
const serviceLinks = [
  "Custom Home Building", "Home Renovations", "Room Additions",
  "Kitchen Remodeling", "Bathroom Remodeling", "Outdoor Living",
];

const Footer = () => (
  <footer className="bg-navy-dark text-primary-foreground">
    <div className="container-section py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div>
          <div className="font-heading font-bold text-xl mb-4">
            Build<span className="text-secondary">Right</span> Homes
          </div>
          <p className="text-primary-foreground/60 font-body text-sm leading-relaxed mb-6">
            Austin's trusted residential construction company. Building dream homes for over 25 years with integrity, quality, and transparency.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold text-primary-foreground/60 hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label={s}>
                {s.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l}><a href="#" className="text-primary-foreground/60 font-body text-sm hover:text-secondary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Our Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l}><a href="#" className="text-primary-foreground/60 font-body text-sm hover:text-secondary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-primary-foreground/60 text-sm font-body">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              4521 Construction Way, Suite 200, Austin, TX 78701
            </li>
            <li>
              <a href="tel:5125550187" className="flex items-center gap-3 text-primary-foreground/60 text-sm font-body hover:text-secondary transition-colors">
                <PhoneIcon size={16} /> (512) 555-0187
              </a>
            </li>
            <li>
              <a href="mailto:info@buildrighthomes.com" className="flex items-center gap-3 text-primary-foreground/60 text-sm font-body hover:text-secondary transition-colors">
                <Mail size={16} /> info@buildrighthomes.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/60 text-sm font-body">
              <Clock size={16} /> Mon-Fri: 7AM-6PM | Sat: 8AM-2PM
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container-section py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/40 text-xs font-body">© 2025 BuildRight Homes. All Rights Reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
            <a key={l} href="#" className="text-primary-foreground/40 text-xs font-body hover:text-secondary transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
