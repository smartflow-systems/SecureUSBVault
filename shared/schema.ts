import { z } from "zod";

// Demo Authentication Session
export const demoSessionSchema = z.object({
  id: z.string(),
  step: z.enum(['idle', 'inserting', 'verifying', 'authenticated', 'failed']),
  timestamp: z.number(),
  deviceId: z.string().optional(),
  username: z.string().optional(),
});

export type DemoSession = z.infer<typeof demoSessionSchema>;

// Security Metrics
export const securityMetricSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.string(),
  status: z.enum(['active', 'secure', 'verified', 'monitoring']),
  description: z.string(),
  icon: z.string(),
});

export type SecurityMetric = z.infer<typeof securityMetricSchema>;

// Use Case
export const useCaseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  industry: z.string(),
  benefits: z.array(z.string()),
  imageKey: z.string(),
});

export type UseCase = z.infer<typeof useCaseSchema>;

// Feature Comparison
export const comparisonFeatureSchema = z.object({
  id: z.string(),
  feature: z.string(),
  secureAuthPro: z.object({
    supported: z.boolean(),
    details: z.string().optional(),
  }),
  yubikey: z.object({
    supported: z.boolean(),
    details: z.string().optional(),
  }),
  fido2: z.object({
    supported: z.boolean(),
    details: z.string().optional(),
  }),
  traditional: z.object({
    supported: z.boolean(),
    details: z.string().optional(),
  }),
});

export type ComparisonFeature = z.infer<typeof comparisonFeatureSchema>;

// Market Statistics
export const marketStatSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  description: z.string(),
  trend: z.enum(['up', 'down', 'stable']).optional(),
  source: z.string().optional(),
});

export type MarketStat = z.infer<typeof marketStatSchema>;

// Integration Example
export const integrationExampleSchema = z.object({
  id: z.string(),
  language: z.string(),
  title: z.string(),
  code: z.string(),
  description: z.string(),
});

export type IntegrationExample = z.infer<typeof integrationExampleSchema>;

// Technology Feature
export const techFeatureSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technicalDetails: z.string(),
  icon: z.string(),
});

export type TechFeature = z.infer<typeof techFeatureSchema>;

// Contact Form
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
