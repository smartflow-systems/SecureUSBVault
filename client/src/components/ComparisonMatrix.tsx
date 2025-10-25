import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

export function ComparisonMatrix() {
  const features = [
    {
      category: "Security",
      items: [
        { name: "Hardware-based encryption", secureAuth: true, yubikey: true, fido2: true, traditional: false },
        { name: "Cold storage credentials", secureAuth: true, yubikey: false, fido2: false, traditional: false },
        { name: "Blockchain-inspired integrity", secureAuth: true, yubikey: false, fido2: false, traditional: false },
        { name: "Tamper detection", secureAuth: true, yubikey: "partial", fido2: "partial", traditional: false },
        { name: "Quantum-resistant encryption", secureAuth: true, yubikey: false, fido2: false, traditional: false },
      ],
    },
    {
      category: "Usability",
      items: [
        { name: "Biometric authentication", secureAuth: true, yubikey: "limited", fido2: "limited", traditional: false },
        { name: "Single-touch access", secureAuth: true, yubikey: false, fido2: false, traditional: false },
        { name: "Offline verification", secureAuth: true, yubikey: "partial", fido2: false, traditional: false },
        { name: "Multi-device support", secureAuth: true, yubikey: true, fido2: true, traditional: true },
      ],
    },
    {
      category: "Enterprise Features",
      items: [
        { name: "Centralized management", secureAuth: true, yubikey: true, fido2: "partial", traditional: true },
        { name: "Audit trail logging", secureAuth: true, yubikey: "partial", fido2: "partial", traditional: "partial" },
        { name: "Compliance certifications", secureAuth: true, yubikey: true, fido2: true, traditional: false },
        { name: "Air-gap security", secureAuth: true, yubikey: false, fido2: false, traditional: false },
      ],
    },
  ];

  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    } else if (value === false) {
      return <XCircle className="w-5 h-5 text-muted-foreground/40" />;
    } else {
      return <MinusCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <section id="comparison" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Competitive Analysis
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How We Compare
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SecureAuth Pro combines the best of hardware security with innovative blockchain-inspired architecture.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-sm sticky left-0 bg-muted/50 z-10">
                        Feature
                      </th>
                      <th className="text-center py-4 px-6 min-w-[140px]">
                        <div className="flex flex-col items-center gap-2">
                          <Badge className="bg-gradient-to-r from-primary to-accent">
                            SecureAuth Pro
                          </Badge>
                          <span className="text-xs text-muted-foreground font-normal">Our Solution</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 min-w-[120px]">
                        <div className="flex flex-col items-center gap-2">
                          <span className="font-semibold text-sm">YubiKey</span>
                          <span className="text-xs text-muted-foreground font-normal">Competitor</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 min-w-[120px]">
                        <div className="flex flex-col items-center gap-2">
                          <span className="font-semibold text-sm">FIDO2</span>
                          <span className="text-xs text-muted-foreground font-normal">Standard</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 min-w-[120px]">
                        <div className="flex flex-col items-center gap-2">
                          <span className="font-semibold text-sm">Passwords</span>
                          <span className="text-xs text-muted-foreground font-normal">Traditional</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((category, categoryIndex) => (
                      <>
                        <tr key={`category-${categoryIndex}`} className="bg-muted/30">
                          <td
                            colSpan={5}
                            className="py-3 px-6 font-semibold text-sm sticky left-0 bg-muted/30 z-10"
                          >
                            {category.category}
                          </td>
                        </tr>
                        {category.items.map((item, itemIndex) => (
                          <tr
                            key={`${categoryIndex}-${itemIndex}`}
                            className="border-b border-border hover:bg-muted/20"
                            data-testid={`row-comparison-${categoryIndex}-${itemIndex}`}
                          >
                            <td className="py-4 px-6 text-sm sticky left-0 bg-card">
                              {item.name}
                            </td>
                            <td className="py-4 px-6 text-center bg-primary/5">
                              {renderIcon(item.secureAuth)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {renderIcon(item.yubikey)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {renderIcon(item.fido2)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {renderIcon(item.traditional)}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-muted-foreground">Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <MinusCircle className="w-4 h-4 text-yellow-500" />
            <span className="text-muted-foreground">Partial Support</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-muted-foreground/40" />
            <span className="text-muted-foreground">Not Supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}
