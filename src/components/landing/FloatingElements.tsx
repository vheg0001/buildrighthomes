import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp, X, Send } from "lucide-react";

const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

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

      {/* Chat Widget Window */}
      {isChatOpen && (
        <div className="hidden lg:flex flex-col fixed bottom-24 right-6 z-50 w-80 h-96 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between text-primary-foreground">
            <div>
              <h3 className="font-heading font-medium">Chat with us</h3>
              <p className="text-xs text-primary-foreground/80">Typically replies immediately</p>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-primary-foreground/20 p-1 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-muted/30 flex flex-col gap-3 font-body text-sm">
            <div className="bg-muted p-3 rounded-2xl rounded-tl-sm w-4/5 text-foreground self-start">
              Hi there! 👋 How can we help you build your dream home today?
            </div>
            <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-sm w-3/4 self-end shadow-sm">
              I'm looking for a quote on a kitchen remodel.
            </div>
            <div className="bg-muted p-3 rounded-2xl rounded-tl-sm w-4/5 text-foreground self-start text-xs text-muted-foreground flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-border bg-card">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full pl-3 pr-10 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-body bg-background"
                disabled
              />
              <button
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
                aria-label="Send message"
              >
                <Send size={14} className="-ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="hidden lg:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-secondary text-secondary-foreground items-center justify-center shadow-xl hover:scale-110 transition-transform"
        aria-label="Toggle chat"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed lg:bottom-6 lg:right-24 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform ${isChatOpen ? 'bottom-24 right-6 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : 'bottom-24 right-6'}`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingElements;
