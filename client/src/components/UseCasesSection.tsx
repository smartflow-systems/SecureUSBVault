import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, Shield, Users, Hospital, GraduationCap, Loader2 } from "lucide-react";
import officeImage from "@assets/generated_images/Office_use_case_scenario_4530ca72.png";
import jobCenterImage from "@assets/generated_images/Job_center_kiosk_use_case_c002c0e3.png";
import { useUseCases } from "@/hooks/useApi";

const iconMap: Record<string, any> = {
  Briefcase,
  Building2,
  Shield,
  Hospital,
  Users,
  GraduationCap,
};

const imageMap: Record<string, string | null> = {
  jobCenter: jobCenterImage,
  office: officeImage,
  government: null,
  healthcare: null,
  finance: null,
  education: null,
};

export function UseCasesSection() {
  const { data: useCases, isLoading, error } = useUseCases();

  if (isLoading) {
    return (
      <section id="use-cases" className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 animate-spin text-primary" data-testid="loader-use-cases" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !useCases) {
    return (
      <section id="use-cases" className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <p className="text-destructive" data-testid="error-use-cases">Failed to load use cases</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="use-cases" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Real-World Applications
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From government services to enterprise security, SecureAuth Pro delivers tamper-proof authentication wherever identity matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            // Map industry to icon
            const iconName = useCase.industry === 'Public Sector' ? 'Briefcase' :
                           useCase.industry === 'Enterprise' ? 'Building2' :
                           useCase.industry === 'Government' ? 'Shield' :
                           useCase.industry === 'Healthcare' ? 'Hospital' :
                           useCase.industry === 'Finance' ? 'Users' : 'GraduationCap';
            const Icon = iconMap[iconName] || Briefcase;
            const image = imageMap[useCase.imageKey];
            
            return (
              <Card
                key={useCase.id}
                className="glass-card overflow-hidden hover-elevate group"
                data-testid={`card-use-case-${index}`}
              >
                {image && (
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={useCase.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      data-testid={`img-use-case-${index}`}
                    />
                  </div>
                )}
                {!image && (
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-primary/40" />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg" data-testid={`text-use-case-title-${index}`}>{useCase.title}</h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-use-case-industry-${index}`}>{useCase.industry}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-use-case-description-${index}`}>
                    {useCase.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium" data-testid={`text-benefits-title-${index}`}>Key Benefits:</p>
                    <ul className="space-y-1.5">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2" data-testid={`text-benefit-${index}-${i}`}>
                          <span className="text-primary mt-0.5">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
