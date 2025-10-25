import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Mail } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#product" },
        { label: "Security", href: "#security" },
        { label: "Integration", href: "#integration" },
        { label: "Pricing", href: "#contact" },
      ],
    },
    {
      title: "Use Cases",
      links: [
        { label: "Government & Public Sector", href: "#use-cases" },
        { label: "Enterprise & Corporate", href: "#use-cases" },
        { label: "Financial Services", href: "#use-cases" },
        { label: "Healthcare", href: "#use-cases" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#integration" },
        { label: "API Reference", href: "#integration" },
        { label: "Whitepaper", href: "#contact" },
        { label: "Case Studies", href: "#use-cases" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#pitch" },
        { label: "Investors", href: "#pitch" },
        { label: "Contact", href: "#contact" },
        { label: "Careers", href: "#contact" },
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-muted-foreground font-medium">SmartFlowSystems</span>
                <span className="font-bold text-xl">SecureAuth Pro</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Next-generation USB-based cold storage authentication combining military-grade hardware security with blockchain-inspired credential management.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-medium" data-testid="text-newsletter-title">Stay Updated</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button data-testid="button-newsletter-subscribe">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline">FIDO2 Certified</Badge>
              <Badge variant="outline">SOC 2 Type II</Badge>
              <Badge variant="outline">ISO 27001</Badge>
              <Badge variant="outline">NIST Compliant</Badge>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`footer-link-${index}-${linkIndex}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-sm text-muted-foreground">
              © 2024 SmartFlowSystems. All rights reserved. Patent pending.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Privacy Policy</button>
              <button className="hover:text-foreground transition-colors">Terms of Service</button>
              <button className="hover:text-foreground transition-colors">Security</button>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Created by <span className="text-primary font-medium">Gareth Bowers</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
