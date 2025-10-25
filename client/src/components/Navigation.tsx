import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SF</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-muted-foreground font-medium">SmartFlowSystems</span>
              <span className="font-bold text-base">SecureAuth Pro</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`button-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contact")}
              data-testid="button-contact"
            >
              Contact
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("demo")}
              data-testid="button-demo-nav"
            >
              See Demo
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`button-nav-mobile-${link.id}`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    data-testid="button-contact-mobile"
                  >
                    Contact
                  </Button>
                  <Button onClick={() => scrollToSection("demo")} data-testid="button-demo-mobile">
                    See Demo
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
