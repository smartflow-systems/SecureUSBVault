import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, Mail, Play } from "lucide-react";

/**
 * SmartFlow CTA (Call-to-Action) Patterns
 * 
 * Various CTA designs for different contexts:
 * - Newsletter signup
 * - Download prompts
 * - Demo requests
 * - Contact forms
 */

// ============================================
// 1. NEWSLETTER SIGNUP
// ============================================
export function NewsletterCTA() {
  return (
    <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Stay Updated
      </h3>
      <p className="text-muted-foreground mb-6">
        Get the latest security insights and product updates delivered to your inbox.
      </p>
      
      <div className="flex gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
          data-testid="input-newsletter-email"
        />
        <Button data-testid="button-newsletter-subscribe">
          Subscribe
          <Mail className="w-4 h-4 ml-2" />
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}

// ============================================
// 2. DOWNLOAD WHITEPAPER
// ============================================
export function WhitepaperCTA() {
  return (
    <div className="glass-card rounded-2xl p-8 flex items-center gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Download className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-foreground mb-1">
          Technical Whitepaper
        </h4>
        <p className="text-sm text-muted-foreground">
          Deep dive into our security architecture and cryptographic implementation
        </p>
      </div>
      
      <Button variant="outline" data-testid="button-download-whitepaper">
        Download PDF
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

// ============================================
// 3. DEMO REQUEST
// ============================================
export function DemoCTA() {
  return (
    <div className="glass-card rounded-2xl p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
        <Play className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-2">
        See It In Action
      </h3>
      <p className="text-muted-foreground mb-6">
        Watch a live demonstration of our authentication flow and security features.
      </p>
      
      <div className="flex gap-3 justify-center">
        <Button size="lg" data-testid="button-live-demo">
          Watch Live Demo
          <Play className="w-4 h-4 ml-2" />
        </Button>
        <Button variant="outline" size="lg" data-testid="button-schedule-demo">
          Schedule Call
        </Button>
      </div>
    </div>
  );
}

// ============================================
// 4. SPLIT CTA SECTION
// ============================================
export function SplitCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card - Primary Action */}
          <div className="glass-card rounded-2xl p-8 border-2 border-primary/40">
            <div className="mb-4">
              <Badge className="mb-2">For Developers</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Start Building Today
              </h3>
              <p className="text-muted-foreground">
                Get instant access to our SDK and API documentation.
              </p>
            </div>
            
            <Button className="w-full" size="lg" data-testid="button-start-building">
              Get API Keys
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          {/* Right Card - Secondary Action */}
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">For Enterprise</Badge>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Custom Solutions
              </h3>
              <p className="text-muted-foreground">
                Talk to our team about enterprise deployment and white-label options.
              </p>
            </div>
            
            <Button variant="outline" className="w-full" size="lg" data-testid="button-contact-sales">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 5. FOOTER CTA BANNER
// ============================================
export function FooterCTA() {
  return (
    <div className="glass-card rounded-2xl p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Ready to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Secure Your Future?
        </span>
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join thousands of organizations protecting their users with next-generation authentication.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" data-testid="button-get-started">
          Get Started Free
        </Button>
        <Button variant="outline" size="lg" data-testid="button-book-demo">
          Book a Demo
        </Button>
      </div>
    </div>
  );
}
