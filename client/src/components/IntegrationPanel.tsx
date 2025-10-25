import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code2, Download, Book, Zap, Shield, Clock } from "lucide-react";

export function IntegrationPanel() {
  const [language, setLanguage] = useState("javascript");

  const installationGuides = {
    javascript: `# Install via npm
npm install @secureauth/sdk

# Or via yarn
yarn add @secureauth/sdk

# Or via pnpm
pnpm add @secureauth/sdk`,
    python: `# Install via pip
pip install secureauth-sdk

# Or via poetry
poetry add secureauth-sdk

# Or via pipenv
pipenv install secureauth-sdk`,
    java: `<!-- Maven -->
<dependency>
  <groupId>com.secureauth</groupId>
  <artifactId>secureauth-sdk</artifactId>
  <version>2.1.0</version>
</dependency>

<!-- Gradle -->
implementation 'com.secureauth:secureauth-sdk:2.1.0'`,
    go: `# Install via go get
go get github.com/secureauth/go-sdk

# Or add to go.mod
require github.com/secureauth/go-sdk v2.1.0`,
    ruby: `# Install via gem
gem install secureauth

# Or add to Gemfile
gem 'secureauth', '~> 2.1'`,
    dotnet: `# Install via NuGet
dotnet add package SecureAuth.SDK

# Or via Package Manager
Install-Package SecureAuth.SDK`,
  };

  const quickStartExamples = {
    javascript: `// Quick Start - Basic Authentication
import { SecureAuth } from '@secureauth/sdk';

const auth = new SecureAuth({
  apiKey: process.env.SECUREAUTH_API_KEY,
  environment: 'production'
});

// Authenticate user with USB device
async function authenticateUser() {
  try {
    const result = await auth.authenticate({
      deviceId: 'auto-detect',
      biometric: true,
      timeout: 30000
    });
    
    console.log('Authentication successful');
    console.log('User ID:', result.userId);
    console.log('Session token:', result.token);
    
    return result;
  } catch (error) {
    console.error('Authentication failed:', error);
    throw error;
  }
}

// Verify session token
async function verifySession(token) {
  const isValid = await auth.verifyToken(token);
  return isValid;
}`,
    python: `# Quick Start - Basic Authentication
from secureauth import SecureAuth
import os

auth = SecureAuth(
    api_key=os.environ.get('SECUREAUTH_API_KEY'),
    environment='production'
)

# Authenticate user with USB device
def authenticate_user():
    try:
        result = auth.authenticate(
            device_id='auto-detect',
            biometric=True,
            timeout=30000
        )
        
        print('Authentication successful')
        print(f'User ID: {result.user_id}')
        print(f'Session token: {result.token}')
        
        return result
    except Exception as error:
        print(f'Authentication failed: {error}')
        raise

# Verify session token
def verify_session(token):
    is_valid = auth.verify_token(token)
    return is_valid`,
    java: `// Quick Start - Basic Authentication
import com.secureauth.SecureAuth;
import com.secureauth.AuthResult;

public class AuthExample {
    private static final SecureAuth auth = new SecureAuth.Builder()
        .apiKey(System.getenv("SECUREAUTH_API_KEY"))
        .environment("production")
        .build();

    public static AuthResult authenticateUser() {
        try {
            AuthResult result = auth.authenticate(
                new AuthOptions()
                    .setDeviceId("auto-detect")
                    .setBiometric(true)
                    .setTimeout(30000)
            );
            
            System.out.println("Authentication successful");
            System.out.println("User ID: " + result.getUserId());
            
            return result;
        } catch (AuthException e) {
            System.err.println("Authentication failed: " + e.getMessage());
            throw e;
        }
    }
    
    public static boolean verifySession(String token) {
        return auth.verifyToken(token);
    }
}`,
    go: `// Quick Start - Basic Authentication
package main

import (
    "fmt"
    "os"
    "github.com/secureauth/go-sdk"
)

func main() {
    // Initialize SDK
    auth := secureauth.NewClient(
        secureauth.Config{
            APIKey:      os.Getenv("SECUREAUTH_API_KEY"),
            Environment: "production",
        },
    )
    
    // Authenticate user
    result, err := authenticateUser(auth)
    if err != nil {
        fmt.Printf("Authentication failed: %v\\n", err)
        return
    }
    
    fmt.Printf("Authenticated user: %s\\n", result.UserID)
}

func authenticateUser(auth *secureauth.Client) (*secureauth.AuthResult, error) {
    return auth.Authenticate(&secureauth.AuthOptions{
        DeviceID:   "auto-detect",
        Biometric:  true,
        Timeout:    30000,
    })
}`,
    ruby: `# Quick Start - Basic Authentication
require 'secureauth'

# Initialize SDK
auth = SecureAuth::Client.new(
  api_key: ENV['SECUREAUTH_API_KEY'],
  environment: 'production'
)

# Authenticate user with USB device
def authenticate_user(auth)
  result = auth.authenticate(
    device_id: 'auto-detect',
    biometric: true,
    timeout: 30000
  )
  
  puts "Authentication successful"
  puts "User ID: #{result.user_id}"
  puts "Session token: #{result.token}"
  
  result
rescue SecureAuth::AuthError => e
  puts "Authentication failed: #{e.message}"
  raise
end

# Verify session token
def verify_session(auth, token)
  auth.verify_token(token)
end`,
    dotnet: `// Quick Start - Basic Authentication
using SecureAuth.SDK;
using System;

public class AuthExample
{
    private static readonly SecureAuthClient auth = new SecureAuthClient(
        apiKey: Environment.GetEnvironmentVariable("SECUREAUTH_API_KEY"),
        environment: "production"
    );

    public static async Task<AuthResult> AuthenticateUser()
    {
        try
        {
            var result = await auth.AuthenticateAsync(new AuthOptions
            {
                DeviceId = "auto-detect",
                Biometric = true,
                Timeout = 30000
            });
            
            Console.WriteLine("Authentication successful");
            Console.WriteLine($"User ID: {result.UserId}");
            
            return result;
        }
        catch (AuthException ex)
        {
            Console.WriteLine($"Authentication failed: {ex.Message}");
            throw;
        }
    }
    
    public static async Task<bool> VerifySession(string token)
    {
        return await auth.VerifyTokenAsync(token);
    }
}`,
  };

  const advancedExamples = {
    javascript: `// Advanced - Multi-factor with Error Handling
const auth = new SecureAuth({
  apiKey: process.env.SECUREAUTH_API_KEY,
  environment: 'production',
  retryAttempts: 3,
  timeout: 45000
});

// Multi-factor authentication with fallback
async function advancedAuth(userId) {
  try {
    // Primary: Device + Biometric
    return await auth.authenticate({
      userId,
      deviceId: 'auto-detect',
      biometric: true,
      factors: ['device', 'biometric'],
      fallbackEnabled: true
    });
  } catch (error) {
    if (error.code === 'BIOMETRIC_FAILED') {
      // Fallback to device only
      return await auth.authenticate({
        userId,
        deviceId: 'auto-detect',
        factors: ['device'],
        requireManualConfirm: true
      });
    }
    throw error;
  }
}

// Listen to authentication events
auth.on('auth:success', (data) => {
  console.log('User authenticated:', data.userId);
  logAuditEvent('authentication', data);
});

auth.on('device:tampered', (data) => {
  console.error('Tamper detected:', data);
  triggerSecurityAlert(data);
});`,
    python: `# Advanced - Batch Operations & Webhooks
auth = SecureAuth(
    api_key=os.environ.get('SECUREAUTH_API_KEY'),
    environment='production',
    retry_attempts=3,
    timeout=45000
)

# Batch verify multiple sessions
def batch_verify_sessions(tokens):
    results = auth.batch_verify(tokens)
    return {
        'valid': [r for r in results if r.is_valid],
        'invalid': [r for r in results if not r.is_valid]
    }

# Set up webhook handlers
@auth.webhook_handler('auth.success')
def on_auth_success(event):
    user_id = event.data['user_id']
    log_audit_event('authentication', event.data)
    
@auth.webhook_handler('device.tampered')
def on_tamper_detected(event):
    device_id = event.data['device_id']
    trigger_security_alert(device_id)
    
# Advanced authentication with metadata
def authenticate_with_context(user_id, context):
    return auth.authenticate(
        user_id=user_id,
        device_id='auto-detect',
        biometric=True,
        context={
            'ip_address': context.ip,
            'user_agent': context.user_agent,
            'location': context.location
        }
    )`,
  };

  const webhookExample = `// Webhook endpoint to receive authentication events
app.post('/webhooks/secureauth', async (req, res) => {
  const signature = req.headers['x-secureauth-signature'];
  const event = req.body;
  
  // Verify webhook signature
  const isValid = SecureAuth.verifyWebhook(event, signature, WEBHOOK_SECRET);
  if (!isValid) {
    return res.status(401).send('Invalid signature');
  }
  
  // Handle different event types
  switch (event.type) {
    case 'auth.success':
      await handleAuthSuccess(event.data);
      break;
      
    case 'auth.failed':
      await handleAuthFailure(event.data);
      break;
      
    case 'device.tampered':
      await handleTamperDetection(event.data);
      break;
      
    case 'device.registered':
      await handleDeviceRegistration(event.data);
      break;
      
    case 'session.expired':
      await handleSessionExpiry(event.data);
      break;
  }
  
  res.status(200).send('OK');
});

// Event handlers
async function handleAuthSuccess(data) {
  console.log(\`User \${data.userId} authenticated successfully\`);
  // Update user session
  // Grant access to resources
  // Log audit trail
}

async function handleTamperDetection(data) {
  console.error(\`Tamper detected on device \${data.deviceId}\`);
  // Immediate security response
  // Revoke all sessions for device
  // Notify security team
  await notifySecurityTeam({
    type: 'TAMPER_DETECTED',
    device: data.deviceId,
    timestamp: data.timestamp
  });
}`;

  const restApiDocs = `# SecureAuth REST API Reference

## Base URL
https://api.secureauth.pro/v1

## Authentication
All API requests require an API key in the Authorization header:
Authorization: Bearer YOUR_API_KEY

## Endpoints

### POST /authenticate
Authenticate a user with their SecureAuth device.

**Request:**
{
  "device_id": "SAP-2024-X1-ABC123",
  "user_id": "usr_1a2b3c4d",
  "biometric_required": true,
  "context": {
    "ip_address": "192.168.1.100",
    "user_agent": "Mozilla/5.0...",
    "location": "US"
  }
}

**Response (Success - 200):**
{
  "success": true,
  "user_id": "usr_1a2b3c4d",
  "session_token": "sat_xyz789...",
  "expires_at": "2024-10-25T18:30:00Z",
  "auth_method": "biometric+device",
  "risk_score": 0.02,
  "device_status": "verified"
}

**Response (Failure - 401):**
{
  "success": false,
  "error": "AUTHENTICATION_FAILED",
  "reason": "Biometric verification failed",
  "retry_allowed": true,
  "attempts_remaining": 2
}

### POST /verify-token
Verify a session token.

**Request:**
{
  "token": "sat_xyz789..."
}

**Response:**
{
  "valid": true,
  "user_id": "usr_1a2b3c4d",
  "expires_at": "2024-10-25T18:30:00Z",
  "device_id": "SAP-2024-X1-ABC123"
}

### POST /revoke-session
Revoke an active session.

**Request:**
{
  "token": "sat_xyz789..."
}

**Response:**
{
  "success": true,
  "revoked_at": "2024-10-25T17:45:00Z"
}

### GET /devices/{device_id}
Get device information and status.

**Response:**
{
  "device_id": "SAP-2024-X1-ABC123",
  "user_id": "usr_1a2b3c4d",
  "status": "active",
  "last_auth": "2024-10-25T17:30:00Z",
  "tamper_detected": false,
  "firmware_version": "2.1.0"
}`;

  return (
    <section id="integration" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Developer Integration
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Complete SDK Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade SDKs for all major platforms. Production-ready in minutes with comprehensive guides, code examples, and API references.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover-elevate">
            <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">&lt;5 min</div>
            <p className="text-sm text-muted-foreground">Integration Time</p>
          </Card>
          <Card className="p-6 text-center hover-elevate">
            <Code2 className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <p className="text-sm text-muted-foreground">Supported Languages</p>
          </Card>
          <Card className="p-6 text-center hover-elevate">
            <Shield className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
            <p className="text-sm text-muted-foreground">API Uptime SLA</p>
          </Card>
          <Card className="p-6 text-center hover-elevate">
            <Zap className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold text-primary mb-2">&lt;200ms</div>
            <p className="text-sm text-muted-foreground">Average Response</p>
          </Card>
        </div>

        <Tabs defaultValue="quickstart" className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto mb-8">
            <TabsTrigger value="quickstart" data-testid="tab-quickstart">
              <Zap className="w-4 h-4 mr-2" />
              Quick Start
            </TabsTrigger>
            <TabsTrigger value="installation" data-testid="tab-installation">
              <Download className="w-4 h-4 mr-2" />
              Install
            </TabsTrigger>
            <TabsTrigger value="advanced" data-testid="tab-advanced">
              <Code2 className="w-4 h-4 mr-2" />
              Advanced
            </TabsTrigger>
            <TabsTrigger value="rest" data-testid="tab-rest">
              <Book className="w-4 h-4 mr-2" />
              REST API
            </TabsTrigger>
            <TabsTrigger value="webhooks" data-testid="tab-webhooks">Webhooks</TabsTrigger>
          </TabsList>

          {/* Quick Start Tab */}
          <TabsContent value="quickstart">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quick Start Guide</h3>
                  <p className="text-muted-foreground">Get up and running in under 5 minutes</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {(['javascript', 'python', 'java', 'go', 'ruby', 'dotnet'] as const).map((lang) => (
                    <Button
                      key={lang}
                      size="sm"
                      variant={language === lang ? "default" : "outline"}
                      onClick={() => setLanguage(lang)}
                      data-testid={`button-lang-${lang}`}
                    >
                      {lang === 'javascript' ? 'JavaScript' : 
                       lang === 'python' ? 'Python' :
                       lang === 'java' ? 'Java' :
                       lang === 'go' ? 'Go' :
                       lang === 'ruby' ? 'Ruby' : '.NET'}
                    </Button>
                  ))}
                </div>
              </div>
              <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground">
                  {quickStartExamples[language as keyof typeof quickStartExamples]}
                </code>
              </pre>
            </Card>
          </TabsContent>

          {/* Installation Tab */}
          <TabsContent value="installation">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Installation Instructions</h3>
              
              <Accordion type="single" collapsible className="w-full">
                {(['javascript', 'python', 'java', 'go', 'ruby', 'dotnet'] as const).map((lang) => (
                  <AccordionItem key={lang} value={lang}>
                    <AccordionTrigger className="text-lg">
                      {lang === 'javascript' ? 'JavaScript / Node.js' : 
                       lang === 'python' ? 'Python' :
                       lang === 'java' ? 'Java' :
                       lang === 'go' ? 'Go' :
                       lang === 'ruby' ? 'Ruby' : '.NET / C#'}
                    </AccordionTrigger>
                    <AccordionContent>
                      <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto mt-4">
                        <code className="text-sm font-mono text-foreground">
                          {installationGuides[lang]}
                        </code>
                      </pre>
                      <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <p className="text-sm"><strong>Next Steps:</strong></p>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                          <li>Set your API key as an environment variable</li>
                          <li>Initialize the SDK in your application</li>
                          <li>Check the Quick Start tab for code examples</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </TabsContent>

          {/* Advanced Tab */}
          <TabsContent value="advanced">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Advanced Integration Patterns</h3>
                <p className="text-muted-foreground">Multi-factor authentication, error handling, and event listeners</p>
              </div>
              
              <div className="flex gap-2 mb-4">
                {(['javascript', 'python'] as const).map((lang) => (
                  <Button
                    key={lang}
                    size="sm"
                    variant={language === lang ? "default" : "outline"}
                    onClick={() => setLanguage(lang)}
                    data-testid={`button-advanced-${lang}`}
                  >
                    {lang === 'javascript' ? 'JavaScript' : 'Python'}
                  </Button>
                ))}
              </div>
              
              <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground">
                  {advancedExamples[language as keyof typeof advancedExamples] || advancedExamples.javascript}
                </code>
              </pre>
            </Card>
          </TabsContent>

          {/* REST API Tab */}
          <TabsContent value="rest">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Book className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">REST API Reference</h3>
              </div>
              <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground whitespace-pre">
                  {restApiDocs}
                </code>
              </pre>
            </Card>
          </TabsContent>

          {/* Webhooks Tab */}
          <TabsContent value="webhooks">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Webhook Integration</h3>
                <p className="text-muted-foreground">
                  Receive real-time notifications for authentication events, tamper detection, and session management
                </p>
              </div>
              <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground">
                  {webhookExample}
                </code>
              </pre>
              
              <div className="mt-6 space-y-4">
                <h4 className="font-semibold">Available Webhook Events:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { event: 'auth.success', desc: 'User successfully authenticated' },
                    { event: 'auth.failed', desc: 'Authentication attempt failed' },
                    { event: 'device.tampered', desc: 'Tamper detection triggered' },
                    { event: 'device.registered', desc: 'New device registered' },
                    { event: 'session.expired', desc: 'User session expired' },
                    { event: 'session.revoked', desc: 'Session manually revoked' },
                  ].map((item) => (
                    <div key={item.event} className="p-3 bg-muted/30 rounded-lg">
                      <code className="text-sm text-primary">{item.event}</code>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 hover-elevate">
            <Book className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Full Documentation</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Complete API reference, guides, and best practices
            </p>
            <Button variant="outline" size="sm" className="w-full">View Docs</Button>
          </Card>
          
          <Card className="p-6 hover-elevate">
            <Code2 className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Code Examples</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ready-to-use examples for common integration patterns
            </p>
            <Button variant="outline" size="sm" className="w-full">Browse Examples</Button>
          </Card>
          
          <Card className="p-6 hover-elevate">
            <Download className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">SDK Downloads</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Download SDKs, sample projects, and integration templates
            </p>
            <Button variant="outline" size="sm" className="w-full">Download SDKs</Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
