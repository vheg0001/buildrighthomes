import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile Call Button */}
      <a
        href="tel:5125550187"
        className="lg:hidden fixed bottom-4 left-4 right-4 z-40 btn-primary justify-center !rounded-full shadow-2xl"
        aria-label="Call now"
      >
        <Phone size={18} />
        Call (512) 555-0187
      </a>

      {/* Chat Widget */}
      <button
        className="hidden lg:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-secondary text-secondary-foreground items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Chat with us"
      >
        <MessageCircle size={24} />
      </button>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-24 lg:right-24 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingElements;
