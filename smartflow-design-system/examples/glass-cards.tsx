import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

/**
 * SmartFlow Glass Card Patterns
 * 
 * Various glass-morphism card designs:
 * - Stat cards
 * - Pricing cards
 * - Testimonial cards
 * - Info cards
 */

// ============================================
// 1. STAT CARD
// ============================================
export function StatCard() {
  return (
    <div className="glass-card rounded-2xl p-8 text-center">
      <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-value">
        $2.4B
      </div>
      <div className="text-sm text-muted-foreground mb-1">
        Market Size by 2028
      </div>
      <div className="text-xs text-muted-foreground">
        Growing at 18.5% CAGR
      </div>
    </div>
  );
}

// ============================================
// 2. PRICING CARD
// ============================================
export function PricingCard() {
  return (
    <div className="glass-card rounded-2xl p-8 hover-elevate transition-all">
      {/* Badge */}
      <Badge className="mb-4">Most Popular</Badge>
      
      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Enterprise
      </h3>
      
      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-primary">$99</span>
        <span className="text-muted-foreground">/month</span>
      </div>
      
      {/* Features */}
      <ul className="space-y-3 mb-8">
        {[
          "Unlimited devices",
          "Advanced analytics",
          "Priority support",
          "Custom integrations",
        ].map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* CTA */}
      <Button className="w-full" data-testid="button-pricing-cta">
        Get Started
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

// ============================================
// 3. TESTIMONIAL CARD
// ============================================
export function TestimonialCard() {
  return (
    <div className="glass-card rounded-2xl p-6">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-foreground mb-6 italic">
        "This solution transformed our authentication process. 
        Security is rock-solid and our users love how fast it is."
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30" />
        <div>
          <div className="text-sm font-semibold text-foreground">
            Sarah Johnson
          </div>
          <div className="text-xs text-muted-foreground">
            CISO, TechCorp
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4. INFO CARD WITH BORDER ACCENT
// ============================================
export function InfoCard() {
  return (
    <div className="glass-card rounded-2xl p-6 border-l-4 border-l-primary">
      <h4 className="text-lg font-semibold text-foreground mb-2">
        Security Alert
      </h4>
      <p className="text-sm text-muted-foreground mb-4">
        All credentials are encrypted with AES-256 and stored in 
        hardware-isolated secure elements.
      </p>
      <Button variant="outline" size="sm">
        Learn More
      </Button>
    </div>
  );
}

// ============================================
// 5. DEMO GRID
// ============================================
export function GlassCardShowcase() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Glass Card Examples
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <PricingCard />
          <TestimonialCard />
          <InfoCard />
        </div>
      </div>
    </section>
  );
}
