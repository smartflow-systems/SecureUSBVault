import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2 } from "lucide-react";

export function IntegrationPanel() {
  const [language, setLanguage] = useState("javascript");

  const codeExamples = {
    javascript: `// Initialize SecureAuth Pro SDK
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
}`,
    python: `# Initialize SecureAuth Pro SDK
from secureauth import SecureAuth

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
        raise`,
    java: `// Initialize SecureAuth Pro SDK
import com.secureauth.SecureAuth;
import com.secureauth.AuthResult;

SecureAuth auth = new SecureAuth.Builder()
    .apiKey(System.getenv("SECUREAUTH_API_KEY"))
    .environment("production")
    .build();

// Authenticate user with USB device
public AuthResult authenticateUser() {
    try {
        AuthResult result = auth.authenticate(
            new AuthOptions()
                .setDeviceId("auto-detect")
                .setBiometric(true)
                .setTimeout(30000)
        );
        
        System.out.println("Authentication successful");
        System.out.println("User ID: " + result.getUserId());
        System.out.println("Session token: " + result.getToken());
        
        return result;
    } catch (AuthException e) {
        System.err.println("Authentication failed: " + e.getMessage());
        throw e;
    }
}`,
  };

  const webhookExample = `// Webhook endpoint to receive authentication events
app.post('/webhooks/secureauth', (req, res) => {
  const event = req.body;
  
  switch (event.type) {
    case 'auth.success':
      console.log('User authenticated:', event.data.userId);
      // Update user session, grant access
      break;
      
    case 'auth.failed':
      console.log('Authentication failed:', event.data.reason);
      // Log security event, notify admins
      break;
      
    case 'device.tampered':
      console.log('Tamper detected:', event.data.deviceId);
      // Immediate security response
      break;
  }
  
  res.status(200).send('OK');
});`;

  const restApiExample = `# REST API Authentication Endpoint

POST https://api.secureauth.pro/v1/authenticate
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "device_id": "SAP-2024-X1-ABC123",
  "biometric_required": true,
  "context": {
    "ip_address": "192.168.1.100",
    "user_agent": "Mozilla/5.0...",
    "location": "US"
  }
}

# Response (Success)
{
  "success": true,
  "user_id": "usr_1a2b3c4d",
  "session_token": "sat_xyz789...",
  "expires_at": "2024-10-25T18:30:00Z",
  "auth_method": "biometric+device",
  "risk_score": 0.02
}`;

  return (
    <section id="integration" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Developer Integration
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Simple, Powerful Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Drop-in SDKs for all major platforms. Production-ready in minutes with comprehensive documentation.
          </p>
        </div>

        <Tabs defaultValue="sdk" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="sdk" data-testid="tab-sdk">SDK Examples</TabsTrigger>
            <TabsTrigger value="rest" data-testid="tab-rest">REST API</TabsTrigger>
            <TabsTrigger value="webhooks" data-testid="tab-webhooks">Webhooks</TabsTrigger>
          </TabsList>

          <TabsContent value="sdk">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">SDK Integration</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage("javascript")}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      language === "javascript"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    data-testid="button-lang-javascript"
                  >
                    JavaScript
                  </button>
                  <button
                    onClick={() => setLanguage("python")}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      language === "python"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    data-testid="button-lang-python"
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setLanguage("java")}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      language === "java"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    data-testid="button-lang-java"
                  >
                    Java
                  </button>
                </div>
              </div>
              <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground">
                  {codeExamples[language as keyof typeof codeExamples]}
                </code>
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="rest">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">REST API Reference</h3>
              </div>
              <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground whitespace-pre">
                  {restApiExample}
                </code>
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Webhook Events</h3>
              </div>
              <pre className="bg-muted/50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground">
                  {webhookExample}
                </code>
              </pre>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">&lt;5 min</div>
            <p className="text-sm text-muted-foreground">Integration Time</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">7</div>
            <p className="text-sm text-muted-foreground">Supported Languages</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
            <p className="text-sm text-muted-foreground">API Uptime</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
