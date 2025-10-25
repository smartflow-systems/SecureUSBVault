import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Usb, Fingerprint, CheckCircle2, XCircle, RotateCw } from "lucide-react";

type DemoStep = 'idle' | 'inserting' | 'verifying' | 'authenticated' | 'failed';

export function LiveDemoSection() {
  const [currentStep, setCurrentStep] = useState<DemoStep>('idle');
  const [progress, setProgress] = useState(0);

  const startDemo = () => {
    setCurrentStep('inserting');
    setProgress(0);

    setTimeout(() => {
      setProgress(33);
      setTimeout(() => {
        setCurrentStep('verifying');
        setProgress(66);
        setTimeout(() => {
          setCurrentStep('authenticated');
          setProgress(100);
        }, 1500);
      }, 1000);
    }, 800);
  };

  const resetDemo = () => {
    setCurrentStep('idle');
    setProgress(0);
  };

  const getStatusBadge = () => {
    switch (currentStep) {
      case 'idle':
        return <Badge variant="secondary">Ready</Badge>;
      case 'inserting':
        return <Badge className="bg-blue-500">Connecting...</Badge>;
      case 'verifying':
        return <Badge className="bg-accent">Verifying...</Badge>;
      case 'authenticated':
        return <Badge className="bg-green-500">Authenticated</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="secondary">Ready</Badge>;
    }
  };

  return (
    <section id="demo" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            See Authentication in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the seamless authentication flow. From device insertion to instant access in under 200ms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">User Experience</h3>
              {getStatusBadge()}
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-lg border-2 transition-all ${
                currentStep === 'inserting' ? 'border-primary bg-primary/5' : 'border-border'
              }`} data-testid="demo-step-1">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    currentStep === 'inserting' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <Usb className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1" data-testid="text-step-1-title">Step 1: Insert Device</h4>
                    <p className="text-sm text-muted-foreground" data-testid="text-step-1-description">
                      Connect SecureAuth Pro to USB port
                    </p>
                  </div>
                  {currentStep !== 'idle' && currentStep !== 'inserting' && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" data-testid="icon-step-1-complete" />
                  )}
                </div>
              </div>

              <div className={`p-6 rounded-lg border-2 transition-all ${
                currentStep === 'verifying' ? 'border-accent bg-accent/5' : 'border-border'
              }`} data-testid="demo-step-2">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    currentStep === 'verifying' ? 'bg-accent text-accent-foreground' : 'bg-muted'
                  }`}>
                    <Fingerprint className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1" data-testid="text-step-2-title">Step 2: Biometric Verify</h4>
                    <p className="text-sm text-muted-foreground" data-testid="text-step-2-description">
                      Touch sensor for fingerprint authentication
                    </p>
                  </div>
                  {currentStep === 'authenticated' && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" data-testid="icon-step-2-complete" />
                  )}
                </div>
              </div>

              <div className={`p-6 rounded-lg border-2 transition-all ${
                currentStep === 'authenticated' ? 'border-green-500 bg-green-500/5' : 'border-border'
              }`} data-testid="demo-step-3">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    currentStep === 'authenticated' ? 'bg-green-500 text-white' : 'bg-muted'
                  }`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1" data-testid="text-step-3-title">Step 3: Instant Access</h4>
                    <p className="text-sm text-muted-foreground" data-testid="text-step-3-description">
                      Securely authenticated and logged in
                    </p>
                  </div>
                  {currentStep === 'authenticated' && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" data-testid="icon-step-3-complete" />
                  )}
                </div>
              </div>
            </div>

            {progress > 0 && (
              <div className="space-y-2" data-testid="demo-progress">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground" data-testid="text-progress-label">Progress</span>
                  <span className="font-medium" data-testid="text-progress-value">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" data-testid="progress-bar" />
              </div>
            )}

            <div className="flex gap-3">
              {currentStep === 'idle' && (
                <Button
                  onClick={startDemo}
                  className="flex-1"
                  data-testid="button-start-demo"
                >
                  Start Authentication
                </Button>
              )}
              {currentStep === 'authenticated' && (
                <Button
                  onClick={resetDemo}
                  variant="outline"
                  className="flex-1"
                  data-testid="button-reset-demo"
                >
                  <RotateCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
              )}
            </div>
          </Card>

          <Card className="p-8 bg-card">
            <h3 className="text-xl font-semibold mb-6">System Response</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="p-3 bg-muted rounded-md">
                <span className="text-muted-foreground">{">"}</span> Waiting for device...
              </div>
              {currentStep !== 'idle' && (
                <div className="p-3 bg-primary/10 text-primary rounded-md">
                  <span className="text-primary/70">{">"}</span> Device detected: SAP-2024-X1
                </div>
              )}
              {(currentStep === 'verifying' || currentStep === 'authenticated') && (
                <>
                  <div className="p-3 bg-accent/10 text-accent-foreground rounded-md">
                    <span className="text-accent/70">{">"}</span> Requesting biometric verification...
                  </div>
                  <div className="p-3 bg-accent/10 text-accent-foreground rounded-md">
                    <span className="text-accent/70">{">"}</span> Fingerprint scanned
                  </div>
                  <div className="p-3 bg-accent/10 text-accent-foreground rounded-md">
                    <span className="text-accent/70">{">"}</span> Validating credentials...
                  </div>
                </>
              )}
              {currentStep === 'authenticated' && (
                <>
                  <div className="p-3 bg-green-500/10 text-green-700 dark:text-green-400 rounded-md">
                    <span className="text-green-700/70 dark:text-green-400/70">{">"}</span> ✓ Authentication successful
                  </div>
                  <div className="p-3 bg-green-500/10 text-green-700 dark:text-green-400 rounded-md">
                    <span className="text-green-700/70 dark:text-green-400/70">{">"}</span> ✓ Session established
                  </div>
                  <div className="p-3 bg-green-500/10 text-green-700 dark:text-green-400 rounded-md">
                    <span className="text-green-700/70 dark:text-green-400/70">{">"}</span> Time elapsed: 183ms
                  </div>
                </>
              )}
            </div>

            {currentStep === 'authenticated' && (
              <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-lg" data-testid="message-auth-success">
                <p className="text-sm font-medium text-green-700 dark:text-green-400" data-testid="text-auth-success">
                  User authenticated successfully with quantum-resistant encryption
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
