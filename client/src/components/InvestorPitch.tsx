import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Target, Rocket, TrendingUp } from "lucide-react";

export function InvestorPitch() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const milestones = [
    { quarter: "Q1 2025", milestone: "Beta launch with government pilots", status: "completed" },
    { quarter: "Q2 2025", milestone: "General availability & enterprise partnerships", status: "in-progress" },
    { quarter: "Q3 2025", milestone: "International expansion (EU, APAC)", status: "planned" },
    { quarter: "Q4 2025", milestone: "Series A funding & scale operations", status: "planned" },
  ];

  return (
    <section id="pitch" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Investment Opportunity
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Future of Authentication
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us in building the next-generation security infrastructure trusted by governments and enterprises worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Problem</h3>
                <p className="text-muted-foreground">Critical security gaps in authentication infrastructure</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                <span className="text-sm leading-relaxed">
                  <strong>$4.45M average breach cost</strong> due to weak authentication, growing 15% annually
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                <span className="text-sm leading-relaxed">
                  <strong>81% of breaches</strong> involve compromised credentials despite existing solutions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                <span className="text-sm leading-relaxed">
                  <strong>Legacy systems</strong> like YubiKey lack blockchain integrity and quantum resistance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive mt-1">•</span>
                <span className="text-sm leading-relaxed">
                  <strong>Government mandates</strong> requiring next-gen authentication for public services
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Solution</h3>
                <p className="text-muted-foreground">Hardware + blockchain innovation</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm leading-relaxed">
                  <strong>Cold storage credentials</strong> with air-gap security and tamper detection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm leading-relaxed">
                  <strong>Blockchain-inspired integrity</strong> providing immutable audit trails
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm leading-relaxed">
                  <strong>Quantum-resistant encryption</strong> future-proofing against emerging threats
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm leading-relaxed">
                  <strong>300% ROI</strong> through reduced breaches, compliance, and operational efficiency
                </span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 mb-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 rounded-lg bg-primary/10">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Product Roadmap</h3>
              <p className="text-muted-foreground">Clear path to market leadership</p>
            </div>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-lg border ${
                  milestone.status === 'completed'
                    ? 'bg-green-500/5 border-green-500/20'
                    : milestone.status === 'in-progress'
                    ? 'bg-primary/5 border-primary/20'
                    : 'bg-muted/50 border-border'
                }`}
                data-testid={`milestone-${index}`}
              >
                <Badge
                  variant={
                    milestone.status === 'completed'
                      ? 'default'
                      : milestone.status === 'in-progress'
                      ? 'default'
                      : 'secondary'
                  }
                  className={
                    milestone.status === 'completed'
                      ? 'bg-green-500'
                      : milestone.status === 'in-progress'
                      ? ''
                      : ''
                  }
                >
                  {milestone.quarter}
                </Badge>
                <span className="flex-1 font-medium">{milestone.milestone}</span>
                {milestone.status === 'completed' && (
                  <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                    Completed
                  </Badge>
                )}
                {milestone.status === 'in-progress' && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    In Progress
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Join the Security Revolution</h3>
            <p className="text-lg mb-8 text-primary-foreground/90">
              We're seeking strategic partners and investors to scale SecureAuth Pro globally. $12.6B market opportunity with proven product-market fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={scrollToContact}
                data-testid="button-pitch-contact"
              >
                Schedule Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground"
                onClick={scrollToContact}
                data-testid="button-pitch-deck"
              >
                Download Pitch Deck
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
