import {
  type DemoSession,
  type SecurityMetric,
  type UseCase,
  type ComparisonFeature,
  type MarketStat,
  type IntegrationExample,
  type TechFeature,
  type ContactForm,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Demo sessions
  createDemoSession(): Promise<DemoSession>;
  getDemoSession(id: string): Promise<DemoSession | undefined>;
  updateDemoSession(id: string, step: DemoSession['step']): Promise<DemoSession>;

  // Security metrics
  getSecurityMetrics(): Promise<SecurityMetric[]>;

  // Use cases
  getUseCases(): Promise<UseCase[]>;

  // Comparison features
  getComparisonFeatures(): Promise<ComparisonFeature[]>;

  // Market stats
  getMarketStats(): Promise<MarketStat[]>;

  // Integration examples
  getIntegrationExamples(): Promise<IntegrationExample[]>;

  // Tech features
  getTechFeatures(): Promise<TechFeature[]>;

  // Contact form
  submitContactForm(form: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private demoSessions: Map<string, DemoSession>;
  private contactSubmissions: ContactForm[];

  constructor() {
    this.demoSessions = new Map();
    this.contactSubmissions = [];
  }

  async createDemoSession(): Promise<DemoSession> {
    const session: DemoSession = {
      id: randomUUID(),
      step: 'idle',
      timestamp: Date.now(),
    };
    this.demoSessions.set(session.id, session);
    return session;
  }

  async getDemoSession(id: string): Promise<DemoSession | undefined> {
    return this.demoSessions.get(id);
  }

  async updateDemoSession(id: string, step: DemoSession['step']): Promise<DemoSession> {
    const session = this.demoSessions.get(id);
    if (!session) {
      throw new Error('Session not found');
    }
    session.step = step;
    session.timestamp = Date.now();
    this.demoSessions.set(id, session);
    return session;
  }

  async getSecurityMetrics(): Promise<SecurityMetric[]> {
    return [
      {
        id: '1',
        name: 'AES-256 Encryption',
        value: 'Active',
        status: 'secure',
        description: 'Military-grade encryption protecting all stored credentials',
        icon: 'Lock',
      },
      {
        id: '2',
        name: 'Tamper Detection',
        value: 'Verified',
        status: 'verified',
        description: 'Hardware-level protection against physical attacks',
        icon: 'Shield',
      },
      {
        id: '3',
        name: 'Audit Trail',
        value: 'Real-time',
        status: 'monitoring',
        description: 'Complete logging of all authentication events',
        icon: 'Activity',
      },
      {
        id: '4',
        name: 'Cold Storage',
        value: 'Enabled',
        status: 'active',
        description: 'Offline credential storage with air-gap security',
        icon: 'Server',
      },
      {
        id: '5',
        name: 'Zero-Knowledge',
        value: 'Enforced',
        status: 'verified',
        description: 'Server never sees or stores user credentials',
        icon: 'Eye',
      },
      {
        id: '6',
        name: 'FIDO2 Certified',
        value: 'Compliant',
        status: 'verified',
        description: 'Meets all industry security standards',
        icon: 'CheckCircle2',
      },
    ];
  }

  async getUseCases(): Promise<UseCase[]> {
    return [
      {
        id: '1',
        title: 'Job Centers & Employment',
        description: 'Secure identity verification for unemployment benefits, job applications, and workforce development programs.',
        industry: 'Public Sector',
        benefits: [
          'Instant identity verification',
          'Fraud prevention',
          'Privacy-preserving authentication',
          'Accessible at public kiosks',
        ],
        imageKey: 'jobCenter',
      },
      {
        id: '2',
        title: 'Corporate Access Control',
        description: 'Physical and digital access management for secure facilities, workstations, and sensitive data systems.',
        industry: 'Enterprise',
        benefits: [
          'Single sign-on for all systems',
          'Audit-compliant logging',
          'Multi-factor authentication',
          'Remote worker support',
        ],
        imageKey: 'office',
      },
      {
        id: '3',
        title: 'Government ID Systems',
        description: 'National identity programs, border control, and citizen services with highest security standards.',
        industry: 'Government',
        benefits: [
          'NIST compliance',
          'Biometric integration',
          'Offline verification',
          'Tamper-evident design',
        ],
        imageKey: 'government',
      },
      {
        id: '4',
        title: 'Healthcare Records',
        description: 'HIPAA-compliant patient authentication and medical record access with privacy protection.',
        industry: 'Healthcare',
        benefits: [
          'HIPAA compliance',
          'Patient privacy',
          'Emergency access protocols',
          'Audit trail for access',
        ],
        imageKey: 'healthcare',
      },
      {
        id: '5',
        title: 'Financial Services',
        description: 'High-value transaction authorization and account access for banking and investment platforms.',
        industry: 'Finance',
        benefits: [
          'Transaction signing',
          'PCI DSS compliant',
          'Anti-fraud measures',
          'Customer trust',
        ],
        imageKey: 'finance',
      },
      {
        id: '6',
        title: 'Education Credentials',
        description: 'Secure exam authentication, transcript verification, and campus access management.',
        industry: 'Education',
        benefits: [
          'Exam integrity',
          'Credential verification',
          'Campus security',
          'Student data protection',
        ],
        imageKey: 'education',
      },
    ];
  }

  async getComparisonFeatures(): Promise<ComparisonFeature[]> {
    return [
      {
        id: '1',
        feature: 'Hardware-based encryption',
        secureAuthPro: { supported: true },
        yubikey: { supported: true },
        fido2: { supported: true },
        traditional: { supported: false },
      },
      {
        id: '2',
        feature: 'Cold storage credentials',
        secureAuthPro: { supported: true },
        yubikey: { supported: false },
        fido2: { supported: false },
        traditional: { supported: false },
      },
      {
        id: '3',
        feature: 'Blockchain-inspired integrity',
        secureAuthPro: { supported: true },
        yubikey: { supported: false },
        fido2: { supported: false },
        traditional: { supported: false },
      },
    ];
  }

  async getMarketStats(): Promise<MarketStat[]> {
    return [
      {
        id: '1',
        label: 'Market Size by 2028',
        value: '$12.6B',
        description: 'Global hardware authentication market growing at 15.8% CAGR',
        trend: 'up',
        source: 'MarketsandMarkets, 2024',
      },
      {
        id: '2',
        label: 'Data Breaches Preventable',
        value: '81%',
        description: 'Authentication failures account for majority of security incidents',
        trend: 'up',
        source: 'Verizon DBIR, 2024',
      },
      {
        id: '3',
        label: 'Average Breach Cost',
        value: '$4.45M',
        description: 'Mean cost of data breach increased 15% over 3 years',
        trend: 'up',
        source: 'IBM Security, 2024',
      },
      {
        id: '4',
        label: 'ROI in First Year',
        value: '300%',
        description: 'Enterprise customers see immediate security and efficiency gains',
        trend: 'up',
        source: 'Internal Analysis, 2024',
      },
    ];
  }

  async getIntegrationExamples(): Promise<IntegrationExample[]> {
    return [
      {
        id: '1',
        language: 'javascript',
        title: 'JavaScript SDK',
        description: 'Authenticate users with the SecureAuth Pro SDK for Node.js',
        code: `import { SecureAuth } from '@secureauth/sdk';

const auth = new SecureAuth({
  apiKey: process.env.SECUREAUTH_API_KEY,
  environment: 'production'
});

async function authenticateUser() {
  const result = await auth.authenticate({
    deviceId: 'auto-detect',
    biometric: true,
    timeout: 30000
  });
  
  return result;
}`,
      },
      {
        id: '2',
        language: 'python',
        title: 'Python SDK',
        description: 'Integrate SecureAuth Pro into Python applications',
        code: `from secureauth import SecureAuth

auth = SecureAuth(
    api_key=os.environ.get('SECUREAUTH_API_KEY'),
    environment='production'
)

def authenticate_user():
    result = auth.authenticate(
        device_id='auto-detect',
        biometric=True,
        timeout=30000
    )
    return result`,
      },
    ];
  }

  async getTechFeatures(): Promise<TechFeature[]> {
    return [
      {
        id: '1',
        title: 'Secure Element Chip',
        description: 'Dedicated cryptographic processor',
        technicalDetails: 'Custom-designed secure element with isolated execution environment',
        icon: 'Cpu',
      },
      {
        id: '2',
        title: 'Cold Storage Architecture',
        description: 'Air-gapped credential vault',
        technicalDetails: 'Credentials stored in isolated, non-networked hardware environment',
        icon: 'Database',
      },
    ];
  }

  async submitContactForm(form: ContactForm): Promise<void> {
    this.contactSubmissions.push(form);
    console.log('Contact form submitted:', form);
  }
}

export const storage = new MemStorage();
