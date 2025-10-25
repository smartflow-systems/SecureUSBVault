import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cpu, Database, Network, Shield, Lock, Layers } from "lucide-react";
import architectureImage from "@assets/generated_images/Architecture_diagram_blockchain_credentials_e14b251b.png";

export function TechnologySection() {
  const techFeatures = [
    {
      icon: Cpu,
      title: "Secure Element Chip",
      description: "Dedicated cryptographic processor",
      details: "Custom-designed secure element with isolated execution environment, resistant to side-channel attacks and physical tampering. Features hardware-accelerated AES-256 encryption and secure key generation.",
    },
    {
      icon: Database,
      title: "Cold Storage Architecture",
      description: "Air-gapped credential vault",
      details: "Credentials stored in isolated, non-networked hardware environment. Uses write-once memory with cryptographic checksums to prevent unauthorized modifications. Completely offline until authentication is required.",
    },
    {
      icon: Network,
      title: "Blockchain-Inspired Integrity",
      description: "Immutable audit chain",
      details: "Every authentication event is cryptographically linked to previous events, creating a tamper-evident chain. Uses Merkle trees for efficient verification and distributed timestamping for non-repudiation.",
    },
    {
      icon: Shield,
      title: "Quantum-Resistant Crypto",
      description: "Future-proof encryption",
      details: "Implements NIST-approved post-quantum cryptographic algorithms including CRYSTALS-Kyber for key exchange and CRYSTALS-Dilithium for digital signatures, ensuring security against quantum computing attacks.",
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Protocols",
      description: "Privacy-preserving auth",
      details: "Authentication servers never see or store actual credentials. Uses zero-knowledge proofs to verify identity without revealing sensitive information, ensuring privacy even if servers are compromised.",
    },
    {
      icon: Layers,
      title: "Multi-Factor Biometrics",
      description: "Layered security checks",
      details: "Combines fingerprint, device presence, and optional PIN for multi-factor authentication. Biometric templates stored encrypted on-device only, never transmitted or stored on servers.",
    },
  ];

  return (
    <section id="technology" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technology Deep-Dive
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Engineering Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge cryptography meets hardware security in a purpose-built authentication platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Architecture Overview</h3>
            <Card className="p-4 overflow-hidden">
              <img
                src={architectureImage}
                alt="System Architecture Diagram"
                className="w-full h-auto rounded-lg"
                data-testid="img-architecture"
              />
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Core Technologies</h3>
            <div className="grid gap-4">
              {techFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-tech-${index}`}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
          <Accordion type="single" collapsible className="w-full">
            {techFeatures.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${index}`}>
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = feature.icon;
                      return <Icon className="w-5 h-5 text-primary shrink-0" />;
                    })()}
                    <span className="font-semibold">{feature.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {feature.details}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
