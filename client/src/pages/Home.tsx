import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LiveDemoSection } from "@/components/LiveDemoSection";
import { SecurityDashboard } from "@/components/SecurityDashboard";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { TechnologySection } from "@/components/TechnologySection";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { IntegrationPanel } from "@/components/IntegrationPanel";
import { InvestorPitch } from "@/components/InvestorPitch";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div id="product" className="scroll-mt-16">
          <LiveDemoSection />
        </div>
        <div id="security" className="scroll-mt-16">
          <SecurityDashboard />
        </div>
        <div id="use-cases" className="scroll-mt-16">
          <UseCasesSection />
        </div>
        <ComparisonMatrix />
        <div id="technology" className="scroll-mt-16">
          <TechnologySection />
        </div>
        <div id="market" className="scroll-mt-16">
          <MarketOpportunity />
        </div>
        <IntegrationPanel />
        <InvestorPitch />
        <Footer />
      </main>
    </div>
  );
}
