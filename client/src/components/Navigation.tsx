import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Product", id: "product" },
    { label: "Demo", id: "demo" },
    { label: "Security", id: "security" },
    { label: "Use Cases", id: "use-cases" },
    { label: "Technology", id: "technology" },
    { label: "Integration", id: "integration" },
    { label: "Market", id: "market" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card-sm border-b border-sf-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#E6C200] flex items-center justify-center gold-glow group-hover:scale-110 transition-transform">
              <span className="text-sf-black font-bold text-base">SF</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-sf-gold font-semibold tracking-wide">SmartFlowSystems</span>
              <span className="font-bold text-base text-sf-beige">SecureAuth Pro</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold text-sf-secondary hover:text-sf-gold transition-all hover:scale-105"
                data-testid={`button-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLocation("/dashboard")}
              className="btn-sf-glass text-sm flex items-center gap-2 group"
              data-testid="button-dashboard"
            >
              <LayoutDashboard className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-sf-outline text-sm"
              data-testid="button-contact"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="btn-sf-gold text-sm"
              data-testid="button-demo-nav"
            >
              See Demo
            </button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="glass-card-sm p-2 hover-glow" data-testid="button-menu">
                <Menu className="h-5 w-5 text-sf-gold" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 glass-card-lg border-l border-sf-gold/20">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-sm font-semibold text-sf-beige hover:text-sf-gold transition-colors"
                    data-testid={`button-nav-mobile-${link.id}`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <button
                    onClick={() => setLocation("/dashboard")}
                    className="btn-sf-glass text-sm w-full"
                    data-testid="button-dashboard-mobile"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="btn-sf-outline text-sm w-full"
                    data-testid="button-contact-mobile"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => scrollToSection("demo")}
                    className="btn-sf-gold text-sm w-full"
                    data-testid="button-demo-mobile"
                  >
                    See Demo
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
