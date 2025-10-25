import { CircuitBackground } from "@/components/CircuitBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LiveDemoSection } from "@/components/LiveDemoSection";
import { SecurityDashboard } from "@/components/SecurityDashboard";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { TechnologySection } from "@/components/TechnologySection";
import { IntegrationPanel } from "@/components/IntegrationPanel";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { ROICalculator } from "@/components/ROICalculator";
import { ComplianceTracker } from "@/components/ComplianceTracker";
import { VideoShowcase } from "@/components/VideoShowcase";
import { PartnerPortal } from "@/components/PartnerPortal";
import { InvestorPitch } from "@/components/InvestorPitch";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <CircuitBackground />
      <Navigation />
      <main className="relative z-10">
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
        <div id="integration" className="scroll-mt-16">
          <IntegrationPanel />
        </div>
        <div id="market" className="scroll-mt-16">
          <MarketOpportunity />
        </div>
        <ROICalculator />
        <ComplianceTracker />
        <VideoShowcase />
        <PartnerPortal />
        <InvestorPitch />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
}
