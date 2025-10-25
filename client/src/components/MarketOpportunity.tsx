import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Target, Loader2 } from "lucide-react";
import { useMarketStats } from "@/hooks/useApi";

const iconMap: Record<string, any> = {
  DollarSign,
  Users,
  Target,
  TrendingUp,
};

export function MarketOpportunity() {
  const { data: stats, isLoading, error } = useMarketStats();

  if (isLoading) {
    return (
      <section id="market" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 animate-spin text-primary" data-testid="loader-market" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return (
      <section id="market" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <p className="text-destructive" data-testid="error-market">Failed to load market stats</p>
          </Card>
        </div>
      </section>
    );
  }

  const segments = [
    {
      name: "Government & Public Sector",
      market: "$3.8B",
      growth: "18%",
      priority: "High",
    },
    {
      name: "Financial Services",
      market: "$4.2B",
      growth: "16%",
      priority: "High",
    },
    {
      name: "Healthcare",
      market: "$2.1B",
      growth: "14%",
      priority: "Medium",
    },
    {
      name: "Enterprise & Corporate",
      market: "$2.5B",
      growth: "13%",
      priority: "Medium",
    },
  ];

  return (
    <section id="market" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Market Analysis
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Massive Market Opportunity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The authentication security market is exploding as organizations face unprecedented cyber threats and regulatory requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            // Map icon name from backend to component
            const iconName = stat.label.includes('Market') ? 'DollarSign' : 
                           stat.label.includes('Breach') && stat.label.includes('Preventable') ? 'Users' :
                           stat.label.includes('Cost') ? 'Target' : 'TrendingUp';
            const Icon = iconMap[iconName] || TrendingUp;
            
            return (
              <Card
                key={stat.id}
                className="p-6 text-center hover-elevate"
                data-testid={`card-market-stat-${index}`}
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-primary" data-testid={`text-market-value-${index}`}>{stat.value}</p>
                  <p className="font-semibold text-base" data-testid={`text-market-label-${index}`}>{stat.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-market-description-${index}`}>
                    {stat.description}
                  </p>
                  {stat.source && (
                    <p className="text-xs text-muted-foreground italic pt-2" data-testid={`text-market-source-${index}`}>
                      Source: {stat.source}
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Target Market Segments</h3>
            <div className="space-y-4">
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border hover-elevate"
                  data-testid={`segment-${index}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-semibold text-base">{segment.name}</h4>
                    <Badge
                      variant={segment.priority === "High" ? "default" : "secondary"}
                      className="shrink-0"
                    >
                      {segment.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Market Size: </span>
                      <span className="font-semibold">{segment.market}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Growth: </span>
                      <span className="font-semibold text-green-600">{segment.growth} CAGR</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Go-to-Market Strategy</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    1
                  </span>
                  Government Partnerships
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed pl-10">
                  Pilot programs with job centers and employment agencies to establish proof of concept and regulatory compliance credentials.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </span>
                  Enterprise Channel
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed pl-10">
                  Strategic partnerships with security resellers and MSPs to reach corporate customers requiring enhanced access control.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </span>
                  Direct Sales - Finance/Healthcare
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed pl-10">
                  Dedicated sales team targeting high-value regulated industries with compliance requirements and security budgets.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
