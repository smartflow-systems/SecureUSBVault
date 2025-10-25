import { Shield, Lock, Zap, Server, Eye, CheckCircle } from "lucide-react";

/**
 * SmartFlow Feature Grid Pattern
 * 
 * Features:
 * - 3-column responsive grid
 * - Glass-morphism cards
 * - Icon-driven design
 * - Hover elevation effects
 * - Consistent spacing
 */

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "AES-256 encryption with hardware-based secure element protection",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Lock,
    title: "Cold Storage Authentication",
    description: "Credentials never leave the device, eliminating phishing risks",
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-200ms authentication with zero network latency",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Server,
    title: "Blockchain Integrity",
    description: "Cryptographic verification ensures credential authenticity",
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Eye,
    title: "Tamper Detection",
    description: "Instant alerts if device has been physically compromised",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: CheckCircle,
    title: "Zero Trust Ready",
    description: "Built for modern zero-trust security architectures",
    color: "from-accent/20 to-primary/20",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enterprise-Grade Security Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for organizations that demand the highest level of security
            without compromising user experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-elevate cursor-pointer transition-all"
              data-testid={`card-feature-${index}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
