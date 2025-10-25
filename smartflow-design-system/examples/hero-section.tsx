import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircuitBackground } from "@/components/CircuitBackground";
import { ArrowRight, Shield } from "lucide-react";

/**
 * SmartFlow Hero Section Pattern
 * 
 * Features:
 * - Flowing circuit background animation
 * - Split-screen layout (content + visual)
 * - Gold gradient heading
 * - Key metrics display
 * - Dual CTAs
 * - Fully responsive
 */

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Circuit Background Animation */}
      <CircuitBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Badge */}
            <Badge variant="outline" className="mb-6" data-testid="badge-tagline">
              Next-Generation Technology
            </Badge>
            
            {/* Hero Title with Gold Gradient */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Hardware Security</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Meets Blockchain
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8">
              Revolutionary USB-based cold storage authentication combining 
              military-grade hardware security with blockchain-inspired 
              credential management.
            </p>
            
            {/* Key Metrics */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-metric-1">
                  256-bit
                </div>
                <div className="text-sm text-muted-foreground">Encryption</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-metric-2">
                  &lt;200ms
                </div>
                <div className="text-sm text-muted-foreground">Auth Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary" data-testid="text-metric-3">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Tamper Proof</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" data-testid="button-see-demo">
                <Shield className="w-4 h-4 mr-2" />
                See Live Demo
              </Button>
              <Button variant="outline" size="lg" data-testid="button-whitepaper">
                Download Whitepaper
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - Product Visual */}
          <div className="relative">
            {/* Replace with your product image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/your-product-image.png" 
                alt="Product showcase" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Optional: Add floating card overlays */}
              <div className="absolute top-8 right-8 glass-card rounded-xl p-4 backdrop-blur-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Military Grade
                    </div>
                    <div className="text-xs text-muted-foreground">
                      AES-256 Encryption
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
