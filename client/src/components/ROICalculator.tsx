import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, DollarSign, Users, Shield, Download } from "lucide-react";

export function ROICalculator() {
  const [employees, setEmployees] = useState(500);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [breachProbability, setBreachProbability] = useState(15);
  const [avgBreachCost, setAvgBreachCost] = useState(4450000);
  const [currentAuthCost, setCurrentAuthCost] = useState(50);
  const [productivityLoss, setProductivityLoss] = useState(10);

  const calculations = useMemo(() => {
    // SecureAuth Pro costs
    const deviceCostPerUser = 149;
    const annualLicensePerUser = 49;
    const implementationCost = 25000;
    
    // Total deployment cost
    const totalDeviceCost = employees * deviceCostPerUser;
    const totalLicenseCost = employees * annualLicensePerUser;
    const yearOneCost = totalDeviceCost + totalLicenseCost + implementationCost;
    const yearTwoPlus = totalLicenseCost; // Only license renewal
    
    // Current costs
    const currentAnnualAuthCost = employees * currentAuthCost * 12;
    
    // Breach risk reduction
    const currentBreachRisk = (breachProbability / 100) * avgBreachCost;
    const reducedBreachRisk = (breachProbability * 0.05 / 100) * avgBreachCost; // 95% reduction
    const breachSavings = currentBreachRisk - reducedBreachRisk;
    
    // Productivity gains
    const timePerAuth = 45; // seconds with current system
    const newTimePerAuth = 3; // seconds with SecureAuth Pro
    const authsPerDay = 5;
    const workingDays = 250;
    const timeSavedPerUser = (timePerAuth - newTimePerAuth) * authsPerDay * workingDays / 3600; // hours
    const totalTimeSaved = timeSavedPerUser * employees;
    const productivitySavings = (totalTimeSaved * (avgSalary / 2080)) * (productivityLoss / 10);
    
    // IT support reduction
    const passwordResetCost = 70;
    const resetsPerYear = employees * 2.4; // Industry average
    const supportSavings = resetsPerYear * passwordResetCost * 0.85; // 85% reduction
    
    // Total annual savings
    const totalAnnualSavings = breachSavings + productivitySavings + supportSavings + currentAnnualAuthCost;
    
    // ROI calculations
    const yearOneROI = ((totalAnnualSavings - yearOneCost) / yearOneCost) * 100;
    const yearTwoROI = ((totalAnnualSavings - yearTwoPlus) / yearTwoPlus) * 100;
    const yearThreeROI = ((totalAnnualSavings - yearTwoPlus) / yearTwoPlus) * 100;
    
    const paybackMonths = (yearOneCost / (totalAnnualSavings / 12));
    const threeYearSavings = totalAnnualSavings * 3 - yearOneCost - yearTwoPlus * 2;
    
    return {
      yearOneCost,
      yearTwoPlus,
      totalAnnualSavings,
      breachSavings,
      productivitySavings,
      supportSavings,
      yearOneROI,
      yearTwoROI,
      yearThreeROI,
      paybackMonths,
      threeYearSavings,
      timeSavedHours: totalTimeSaved,
    };
  }, [employees, avgSalary, breachProbability, avgBreachCost, currentAuthCost, productivityLoss]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            ROI Calculator
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Calculate Your Return on Investment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See the financial impact of deploying SecureAuth Pro across your organization. Adjust the parameters below to match your environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card className="glass-card p-8">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Your Organization</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="employees">Number of Employees</Label>
                  <span className="text-sm font-medium">{formatNumber(employees)}</span>
                </div>
                <Slider
                  id="employees"
                  min={50}
                  max={10000}
                  step={50}
                  value={[employees]}
                  onValueChange={(value) => setEmployees(value[0])}
                  data-testid="slider-employees"
                />
              </div>

              <div>
                <Label htmlFor="salary">Average Employee Salary</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                  <Input
                    id="salary"
                    type="number"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="pl-7"
                    data-testid="input-salary"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="breach-prob">Annual Breach Probability</Label>
                  <span className="text-sm font-medium">{breachProbability}%</span>
                </div>
                <Slider
                  id="breach-prob"
                  min={1}
                  max={50}
                  step={1}
                  value={[breachProbability]}
                  onValueChange={(value) => setBreachProbability(value[0])}
                  data-testid="slider-breach-probability"
                />
              </div>

              <div>
                <Label htmlFor="breach-cost">Average Data Breach Cost</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                  <Input
                    id="breach-cost"
                    type="number"
                    value={avgBreachCost}
                    onChange={(e) => setAvgBreachCost(Number(e.target.value))}
                    className="pl-7"
                    data-testid="input-breach-cost"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="current-cost">Current Auth Cost per User/Month</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                  <Input
                    id="current-cost"
                    type="number"
                    value={currentAuthCost}
                    onChange={(e) => setCurrentAuthCost(Number(e.target.value))}
                    className="pl-7"
                    data-testid="input-current-cost"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="productivity">Productivity Improvement Factor</Label>
                  <span className="text-sm font-medium">{productivityLoss}/10</span>
                </div>
                <Slider
                  id="productivity"
                  min={1}
                  max={10}
                  step={1}
                  value={[productivityLoss]}
                  onValueChange={(value) => setProductivityLoss(value[0])}
                  data-testid="slider-productivity"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Higher values indicate greater productivity impact from faster authentication
                </p>
              </div>
            </div>
          </Card>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <Card className="glass-card p-8">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">ROI Summary</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <p className="text-sm text-muted-foreground">3-Year Savings</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400" data-testid="text-3year-savings">
                    {formatCurrency(calculations.threeYearSavings)}
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">Year 1 ROI</p>
                  </div>
                  <p className="text-2xl font-bold text-primary" data-testid="text-year1-roi">
                    {calculations.yearOneROI.toFixed(0)}%
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-accent" />
                    <p className="text-sm text-muted-foreground">Payback Period</p>
                  </div>
                  <p className="text-2xl font-bold text-accent" data-testid="text-payback">
                    {calculations.paybackMonths.toFixed(1)} months
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">Annual Savings</p>
                  </div>
                  <p className="text-2xl font-bold text-primary" data-testid="text-annual-savings">
                    {formatCurrency(calculations.totalAnnualSavings)}
                  </p>
                </div>
              </div>
            </Card>

            {/* Savings Breakdown */}
            <Card className="glass-card p-8">
              <h4 className="font-semibold mb-4">Savings Breakdown (Annual)</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">Breach Risk Reduction</span>
                  <span className="font-semibold" data-testid="text-breach-savings">
                    {formatCurrency(calculations.breachSavings)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">Productivity Gains</span>
                  <span className="font-semibold" data-testid="text-productivity-savings">
                    {formatCurrency(calculations.productivitySavings)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">IT Support Reduction</span>
                  <span className="font-semibold" data-testid="text-support-savings">
                    {formatCurrency(calculations.supportSavings)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <span className="font-semibold">Total Annual Savings</span>
                  <span className="font-bold text-primary" data-testid="text-total-savings">
                    {formatCurrency(calculations.totalAnnualSavings)}
                  </span>
                </div>
              </div>
            </Card>

            {/* Cost Breakdown */}
            <Card className="glass-card p-8">
              <h4 className="font-semibold mb-4">Investment Required</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">Year 1 (Devices + Licenses + Setup)</span>
                  <span className="font-semibold" data-testid="text-year1-cost">
                    {formatCurrency(calculations.yearOneCost)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm">Year 2+ (Annual Licenses)</span>
                  <span className="font-semibold" data-testid="text-year2-cost">
                    {formatCurrency(calculations.yearTwoPlus)}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Productivity Impact:</strong> {formatNumber(calculations.timeSavedHours)} hours saved annually across your organization
                </p>
              </div>
            </Card>

            {/* CTA */}
            <div className="flex gap-3">
              <Button className="flex-1" size="lg" data-testid="button-schedule-demo">
                <Users className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" data-testid="button-download-report">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>

        {/* 3-Year Projection */}
        <Card className="glass-card p-8 mt-12">
          <h3 className="text-xl font-bold mb-6">3-Year Financial Projection</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { year: 'Year 1', cost: calculations.yearOneCost, savings: calculations.totalAnnualSavings, roi: calculations.yearOneROI },
              { year: 'Year 2', cost: calculations.yearTwoPlus, savings: calculations.totalAnnualSavings, roi: calculations.yearTwoROI },
              { year: 'Year 3', cost: calculations.yearTwoPlus, savings: calculations.totalAnnualSavings, roi: calculations.yearThreeROI },
            ].map((item, index) => (
              <div key={item.year} className="p-6 bg-muted/30 rounded-lg" data-testid={`card-year-${index + 1}`}>
                <h4 className="font-semibold mb-4">{item.year}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="font-medium">{formatCurrency(item.cost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Savings:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {formatCurrency(item.savings)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-medium">Net Benefit:</span>
                    <span className="font-bold text-primary">
                      {formatCurrency(item.savings - item.cost)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-medium">ROI:</span>
                    <span className="font-bold text-primary">
                      {item.roi.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-8 max-w-3xl mx-auto">
          * Calculations are estimates based on industry averages and may vary by organization. Contact our sales team for a customized ROI analysis specific to your environment.
        </p>
      </div>
    </section>
  );
}
