import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Target, Shield, Building2, Hospital, Landmark, DollarSign, School, Factory } from "lucide-react";

export function ComplianceTracker() {
  const certifications = [
    {
      name: "FIDO2 Certified",
      status: "certified",
      date: "March 2024",
      description: "Industry-standard authentication protocol certification ensuring interoperability",
      icon: Shield,
      level: "Level 2",
    },
    {
      name: "SOC 2 Type II",
      status: "certified",
      date: "January 2024",
      description: "Comprehensive security, availability, and confidentiality controls audit",
      icon: CheckCircle2,
      level: "Type II",
    },
    {
      name: "ISO 27001",
      status: "certified",
      date: "December 2023",
      description: "International standard for information security management systems",
      icon: Shield,
      level: "2013",
    },
    {
      name: "NIST Compliance",
      status: "certified",
      date: "February 2024",
      description: "National Institute of Standards and Technology cybersecurity framework",
      icon: Landmark,
      level: "CSF 2.0",
    },
    {
      name: "HIPAA Compliant",
      status: "in-progress",
      date: "Q2 2025 (Target)",
      description: "Health Insurance Portability and Accountability Act compliance for healthcare",
      icon: Hospital,
      level: "Pending",
    },
    {
      name: "PCI DSS",
      status: "planned",
      date: "Q3 2025 (Planned)",
      description: "Payment Card Industry Data Security Standard for financial transactions",
      icon: DollarSign,
      level: "Level 1",
    },
  ];

  const roadmap = [
    {
      quarter: "Q1 2024",
      milestone: "SOC 2 Type II Certification",
      status: "completed",
      details: "Completed comprehensive security audit and controls assessment",
    },
    {
      quarter: "Q1 2024",
      milestone: "FIDO2 & NIST Compliance",
      status: "completed",
      details: "Achieved certification for authentication standards and federal compliance",
    },
    {
      quarter: "Q2 2024",
      milestone: "ISO 27001 Maintenance",
      status: "completed",
      details: "Annual surveillance audit passed successfully",
    },
    {
      quarter: "Q2 2025",
      milestone: "HIPAA Compliance",
      status: "in-progress",
      details: "Healthcare data protection requirements - audit in progress",
    },
    {
      quarter: "Q3 2025",
      milestone: "PCI DSS Certification",
      status: "planned",
      details: "Payment processing security standards for financial services",
    },
    {
      quarter: "Q4 2025",
      milestone: "GDPR & CCPA Updates",
      status: "planned",
      details: "Enhanced privacy controls for EU and California regulations",
    },
  ];

  const industryRequirements = [
    {
      industry: "Government & Public Sector",
      icon: Landmark,
      required: ["NIST CSF", "FIPS 140-2", "FedRAMP"],
      status: "Compliant",
      color: "green",
    },
    {
      industry: "Healthcare",
      icon: Hospital,
      required: ["HIPAA", "HITECH", "ISO 27001"],
      status: "In Progress",
      color: "yellow",
    },
    {
      industry: "Financial Services",
      icon: DollarSign,
      required: ["PCI DSS", "SOX", "GLBA"],
      status: "Q3 2025",
      color: "blue",
    },
    {
      industry: "Enterprise & Corporate",
      icon: Building2,
      required: ["SOC 2", "ISO 27001", "GDPR"],
      status: "Compliant",
      color: "green",
    },
    {
      industry: "Education",
      icon: School,
      required: ["FERPA", "COPPA", "SOC 2"],
      status: "Compliant",
      color: "green",
    },
    {
      industry: "Manufacturing",
      icon: Factory,
      required: ["ISO 27001", "NIST", "ITAR"],
      status: "Partial",
      color: "yellow",
    },
  ];

  return (
    <section id="compliance" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Compliance & Certifications
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Certified for Enterprise Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meets the highest industry standards for security, privacy, and compliance across all major regulatory frameworks.
          </p>
        </div>

        {/* Current Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Current Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              const isCompleted = cert.status === "certified";
              const isInProgress = cert.status === "in-progress";
              
              return (
                <Card
                  key={index}
                  className={`glass-card p-6 hover-elevate ${
                    isCompleted ? "border-green-500/20 bg-green-500/5" :
                    isInProgress ? "border-yellow-500/20 bg-yellow-500/5" :
                    ""
                  }`}
                  data-testid={`card-cert-${index}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      isCompleted ? "bg-green-500/10" :
                      isInProgress ? "bg-yellow-500/10" :
                      "bg-muted"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isCompleted ? "text-green-500" :
                        isInProgress ? "text-yellow-500" :
                        "text-muted-foreground"
                      }`} />
                    </div>
                    <Badge
                      variant={isCompleted ? "default" : "secondary"}
                      className={
                        isCompleted ? "bg-green-500 hover:bg-green-600" :
                        isInProgress ? "bg-yellow-500 hover:bg-yellow-600" :
                        ""
                      }
                      data-testid={`badge-status-${index}`}
                    >
                      {isCompleted ? "Certified" : isInProgress ? "In Progress" : "Planned"}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2" data-testid={`text-cert-name-${index}`}>
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3" data-testid={`text-cert-desc-${index}`}>
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    <span className="text-xs font-medium">{cert.level}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Compliance Roadmap */}
        <Card className="glass-card p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8">Compliance Roadmap 2024-2025</h3>
          <div className="space-y-4">
            {roadmap.map((item, index) => {
              const isCompleted = item.status === "completed";
              const isInProgress = item.status === "in-progress";
              
              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${
                    isCompleted ? "border-l-green-500 bg-green-500/5" :
                    isInProgress ? "border-l-yellow-500 bg-yellow-500/5" :
                    "border-l-primary bg-primary/5"
                  }`}
                  data-testid={`roadmap-item-${index}`}
                >
                  <div className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : isInProgress ? (
                      <Clock className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <Target className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <Badge variant="outline" className="mb-2">{item.quarter}</Badge>
                        <h4 className="font-semibold" data-testid={`text-roadmap-title-${index}`}>
                          {item.milestone}
                        </h4>
                      </div>
                      <Badge
                        variant={isCompleted ? "default" : isInProgress ? "secondary" : "outline"}
                        className={isCompleted ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        {isCompleted ? "Completed" : isInProgress ? "In Progress" : "Planned"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Industry Requirements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Industry-Specific Requirements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryRequirements.map((industry, index) => {
              const Icon = industry.icon;
              const isCompliant = industry.status === "Compliant";
              
              return (
                <Card key={index} className="glass-card p-6 hover-elevate" data-testid={`card-industry-${index}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold" data-testid={`text-industry-name-${index}`}>
                      {industry.industry}
                    </h4>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Required Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.required.map((req, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <Badge
                        variant={isCompliant ? "default" : "outline"}
                        className={isCompliant ? "bg-green-500 hover:bg-green-600" : ""}
                        data-testid={`badge-industry-status-${index}`}
                      >
                        {industry.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Compliance Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="glass-card p-6 text-center hover-elevate">
            <div className="text-3xl font-bold text-green-500 mb-2">4</div>
            <p className="text-sm text-muted-foreground">Active Certifications</p>
          </Card>
          <Card className="glass-card p-6 text-center hover-elevate">
            <div className="text-3xl font-bold text-yellow-500 mb-2">2</div>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </Card>
          <Card className="glass-card p-6 text-center hover-elevate">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <p className="text-sm text-muted-foreground">Industries Covered</p>
          </Card>
          <Card className="glass-card p-6 text-center hover-elevate">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Audit Success Rate</p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="glass-card p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Custom Compliance Support?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team can help you navigate industry-specific regulatory requirements and achieve certification for your deployment.
          </p>
          <div className="flex gap-4 justify-center">
            <Badge variant="outline" className="text-sm">Compliance Consulting</Badge>
            <Badge variant="outline" className="text-sm">Audit Support</Badge>
            <Badge variant="outline" className="text-sm">Custom Certifications</Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
