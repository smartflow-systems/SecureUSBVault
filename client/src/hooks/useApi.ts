import { useQuery } from "@tanstack/react-query";
import type { SecurityMetric, UseCase, MarketStat, ComparisonFeature, IntegrationExample, TechFeature } from "@shared/schema";

export function useSecurityMetrics() {
  return useQuery<SecurityMetric[]>({
    queryKey: ["/api/security-metrics"],
  });
}

export function useUseCases() {
  return useQuery<UseCase[]>({
    queryKey: ["/api/use-cases"],
  });
}

export function useMarketStats() {
  return useQuery<MarketStat[]>({
    queryKey: ["/api/market-stats"],
  });
}

export function useComparisonFeatures() {
  return useQuery<ComparisonFeature[]>({
    queryKey: ["/api/comparison"],
  });
}

export function useIntegrationExamples() {
  return useQuery<IntegrationExample[]>({
    queryKey: ["/api/integration-examples"],
  });
}

export function useTechFeatures() {
  return useQuery<TechFeature[]>({
    queryKey: ["/api/tech-features"],
  });
}
