import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  Palette, 
  Shield, 
  DollarSign, 
  Award,
  Check,
  X,
  Star,
  Zap,
  Crown,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

export function PartnerPortal() {
  const [brandColor, setBrandColor] = useState("#3b82f6");
  const [companyName, setCompanyName] = useState("Your Company");
  const [logoText, setLogoText] = useState("YC");

  const partnerTiers = [
    {
      name: "Bronze Partner",
      icon: Award,
      price: "Free",
      revenue: "10%",
      color: "#cd7f32",
      features: [
        { included: true, text: "Up to 100 devices" },
        { included: true, text: "Basic white-labeling" },
        { included: true, text: "Email support" },
        { included: true, text: "Quarterly updates" },
        { included: false, text: "Custom branding" },
        { included: false, text: "Dedicated account manager" },
        { included: false, text: "Priority support" },
        { included: false, text: "Custom integrations" },
      ],
      cta: "Get Started",
    },
    {
      name: "Silver Partner",
      icon: Star,
      price: "$2,500/mo",
      revenue: "15%",
      color: "#c0c0c0",
      features: [
        { included: true, text: "Up to 500 devices" },
        { included: true, text: "Full white-labeling" },
        { included: true, text: "Priority email support" },
        { included: true, text: "Monthly updates" },
        { included: true, text: "Custom branding" },
        { included: true, text: "Co-marketing opportunities" },
        { included: false, text: "Dedicated account manager" },
        { included: false, text: "Custom integrations" },
      ],
      cta: "Upgrade to Silver",
      popular: false,
    },
    {
      name: "Gold Partner",
      icon: Zap,
      price: "$5,000/mo",
      revenue: "20%",
      color: "#ffd700",
      features: [
        { included: true, text: "Up to 2,000 devices" },
        { included: true, text: "Full white-labeling" },
        { included: true, text: "24/7 phone & chat support" },
        { included: true, text: "Weekly updates" },
        { included: true, text: "Custom branding" },
        { included: true, text: "Co-marketing opportunities" },
        { included: true, text: "Dedicated account manager" },
        { included: true, text: "Custom API integrations" },
      ],
      cta: "Upgrade to Gold",
      popular: true,
    },
    {
      name: "Platinum Partner",
      icon: Crown,
      price: "Custom",
      revenue: "25%+",
      color: "#e5e4e2",
      features: [
        { included: true, text: "Unlimited devices" },
        { included: true, text: "Full white-labeling" },
        { included: true, text: "24/7 priority support" },
        { included: true, text: "Real-time updates" },
        { included: true, text: "Custom branding" },
        { included: true, text: "Joint marketing campaigns" },
        { included: true, text: "Executive account team" },
        { included: true, text: "Custom development" },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="partner-portal" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Partner Program
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            White-Label Partnership Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our partner ecosystem and offer SecureAuth Pro under your own brand. Customize the experience for your customers while we handle the technology.
          </p>
        </motion.div>

        {/* White-Label Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Interactive White-Label Preview</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Customization Controls */}
            <Card className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Palette className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">Customize Your Brand</h4>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Your Company"
                    className="mt-2"
                    data-testid="input-company-name"
                  />
                </div>

                <div>
                  <Label htmlFor="logo-text">Logo Initials</Label>
                  <Input
                    id="logo-text"
                    value={logoText}
                    onChange={(e) => setLogoText(e.target.value.slice(0, 3))}
                    placeholder="YC"
                    maxLength={3}
                    className="mt-2"
                    data-testid="input-logo-text"
                  />
                </div>

                <div>
                  <Label htmlFor="brand-color">Primary Brand Color</Label>
                  <div className="flex gap-3 mt-2">
                    <Input
                      id="brand-color"
                      type="color"
                      value={brandColor}
                      onChange={(e) => setBrandColor(e.target.value)}
                      className="w-20 h-10"
                      data-testid="input-brand-color"
                    />
                    <Input
                      value={brandColor}
                      onChange={(e) => setBrandColor(e.target.value)}
                      placeholder="#3b82f6"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h5 className="font-semibold mb-3">Customization Options:</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Custom logo & branding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Color scheme customization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Custom domain & email</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Branded documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Live Preview */}
            <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted">
              <h4 className="text-xl font-bold mb-6">Live Preview</h4>
              
              <Card className="p-6 bg-card">
                {/* Mock Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: brandColor }}
                    >
                      {logoText}
                    </div>
                    <span className="font-semibold">{companyName}</span>
                  </div>
                  <Badge style={{ backgroundColor: brandColor, color: "white" }}>
                    Partner
                  </Badge>
                </div>

                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium mb-3">Authentication Dashboard</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-muted/30">
                        <div className="text-xs text-muted-foreground mb-1">Active Devices</div>
                        <div className="text-lg font-bold">1,247</div>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/30">
                        <div className="text-xs text-muted-foreground mb-1">Success Rate</div>
                        <div className="text-lg font-bold">99.8%</div>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    style={{ backgroundColor: brandColor }}
                    data-testid="button-preview-action"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Authenticate with {companyName}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Powered by {companyName} SecureAuth™
                  </p>
                </div>
              </Card>
            </Card>
          </div>
        </div>

        {/* Partner Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Partnership Tiers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTiers.map((tier, index) => {
              const Icon = tier.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`p-6 hover-elevate relative ${
                      tier.popular ? "border-primary border-2" : ""
                    }`}
                    data-testid={`card-tier-${index}`}
                  >
                    {tier.popular && (
                      <Badge
                        className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary"
                      >
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className="text-center mb-6">
                      <div
                        className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: `${tier.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: tier.color }} />
                      </div>
                      <h4 className="font-bold text-lg mb-2" data-testid={`text-tier-name-${index}`}>
                        {tier.name}
                      </h4>
                      <div className="text-3xl font-bold mb-1">{tier.price}</div>
                      <div className="text-sm text-muted-foreground">
                        {tier.revenue} revenue share
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                          )}
                          <span
                            className={feature.included ? "" : "text-muted-foreground"}
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                      data-testid={`button-tier-cta-${index}`}
                    >
                      {tier.cta}
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Users,
              title: "Dedicated Support",
              description: "Exclusive partner success team to help you grow",
            },
            {
              icon: DollarSign,
              title: "Revenue Sharing",
              description: "Competitive margins with performance bonuses",
            },
            {
              icon: Briefcase,
              title: "Marketing Resources",
              description: "Co-branded materials and marketing fund access",
            },
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover-elevate">
                  <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Become a Partner?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of partners worldwide offering SecureAuth Pro to their customers. Schedule a call with our partnerships team to get started.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" data-testid="button-apply-partner">
              Apply for Partnership
            </Button>
            <Button size="lg" variant="outline" data-testid="button-schedule-call">
              Schedule a Call
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
