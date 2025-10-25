import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Activity, Eye, Server, CheckCircle2, Loader2 } from "lucide-react";
import dashboardImage from "@assets/generated_images/Security_dashboard_interface_mockup_1c8aeb4f.png";
import { useSecurityMetrics } from "@/hooks/useApi";

const iconMap: Record<string, any> = {
  Lock,
  Shield,
  Activity,
  Server,
  Eye,
  CheckCircle2,
};

export function SecurityDashboard() {
  const { data: metrics, isLoading, error } = useSecurityMetrics();

  if (isLoading) {
    return (
      <section id="security" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 animate-spin text-primary" data-testid="loader-security" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !metrics) {
    return (
      <section id="security" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <p className="text-destructive" data-testid="error-security">Failed to load security metrics</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="security" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Security Architecture
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Multi-layered protection combining hardware security, cryptographic protocols, and blockchain-inspired integrity verification.
          </p>
        </div>

        <div className="mb-12">
          <Card className="glass-card p-4 overflow-hidden">
            <img
              src={dashboardImage}
              alt="Security Dashboard Interface"
              className="w-full h-auto rounded-lg"
              data-testid="img-security-dashboard"
            />
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon] || Shield;
            return (
              <Card key={metric.id} className="glass-card p-6 hover-elevate" data-testid={`card-security-metric-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-base" data-testid={`text-metric-title-${index}`}>{metric.name}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-green-500/10 text-green-700 dark:text-green-400 shrink-0"
                        data-testid={`badge-metric-value-${index}`}
                      >
                        {metric.value}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-metric-description-${index}`}>
                      {metric.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="glass-card mt-12 p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-uptime">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-uptime-value">99.99%</p>
              <p className="text-sm text-muted-foreground" data-testid="text-uptime-label">Uptime SLA</p>
            </div>
            <div data-testid="stat-breaches">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-breaches-value">Zero</p>
              <p className="text-sm text-muted-foreground" data-testid="text-breaches-label">Security Breaches</p>
            </div>
            <div data-testid="stat-certified">
              <p className="text-4xl font-bold text-primary mb-2" data-testid="text-certified-value">SOC 2</p>
              <p className="text-sm text-muted-foreground" data-testid="text-certified-label">Type II Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
