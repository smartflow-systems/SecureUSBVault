import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
        isVisible ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-16"
      }`}
      aria-label="Scroll to top"
      data-testid="button-scroll-to-top"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-lg border border-primary/40 flex items-center justify-center hover-elevate active-elevate-2 shadow-lg shadow-primary/30">
        <ArrowUp className="w-5 h-5 text-primary" />
      </div>
    </button>
  );
}
