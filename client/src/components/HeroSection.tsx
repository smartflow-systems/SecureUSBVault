import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Fingerprint, Zap } from "lucide-react";
import productImage from "@assets/generated_images/USB_security_key_hero_product_857e4d36.png";

export function HeroSection() {
  const scrollToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex">
              <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium">
                <Shield className="w-3 h-3 mr-2" />
                Next-Generation Authentication
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hardware Security
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Meets Blockchain
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Revolutionary USB-based cold storage authentication combining military-grade hardware security with blockchain-inspired credential management. Tamper-proof, FIDO-compliant, and enterprise-ready.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToDemo}
                className="text-base"
                data-testid="button-hero-demo"
              >
                <Zap className="w-4 h-4 mr-2" />
                See Live Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="text-base"
                data-testid="button-hero-whitepaper"
              >
                Download Whitepaper
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1" data-testid="stat-encryption">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold" data-testid="text-encryption-value">256-bit</p>
                </div>
                <p className="text-sm text-muted-foreground" data-testid="text-encryption-label">Encryption</p>
              </div>
              <div className="space-y-1" data-testid="stat-auth-speed">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold" data-testid="text-auth-speed-value">&lt;200ms</p>
                </div>
                <p className="text-sm text-muted-foreground" data-testid="text-auth-speed-label">Auth Speed</p>
              </div>
              <div className="space-y-1" data-testid="stat-tamper-proof">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold" data-testid="text-tamper-proof-value">100%</p>
                </div>
                <p className="text-sm text-muted-foreground" data-testid="text-tamper-proof-label">Tamper Proof</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <div className="relative">
              <img
                src={productImage}
                alt="SecureAuth Pro USB Authentication Device"
                className="w-full h-auto rounded-2xl shadow-2xl"
                data-testid="img-hero-product"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-20 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
