import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo session endpoints
  app.post("/api/demo/start", async (req, res) => {
    try {
      const session = await storage.createDemoSession();
      res.json(session);
    } catch (error) {
      console.error('Error creating demo session:', error);
      res.status(500).json({ error: 'Failed to create demo session' });
    }
  });

  app.get("/api/demo/:id", async (req, res) => {
    try {
      const session = await storage.getDemoSession(req.params.id);
      if (!session) {
        return res.status(404).json({ error: 'Session not found' });
      }
      res.json(session);
    } catch (error) {
      console.error('Error getting demo session:', error);
      res.status(500).json({ error: 'Failed to get demo session' });
    }
  });

  app.patch("/api/demo/:id", async (req, res) => {
    try {
      const { step } = req.body;
      if (!step) {
        return res.status(400).json({ error: 'Step is required' });
      }
      const session = await storage.updateDemoSession(req.params.id, step);
      res.json(session);
    } catch (error) {
      console.error('Error updating demo session:', error);
      res.status(500).json({ error: 'Failed to update demo session' });
    }
  });

  // Security metrics
  app.get("/api/security-metrics", async (req, res) => {
    try {
      const metrics = await storage.getSecurityMetrics();
      res.json(metrics);
    } catch (error) {
      console.error('Error getting security metrics:', error);
      res.status(500).json({ error: 'Failed to get security metrics' });
    }
  });

  // Use cases
  app.get("/api/use-cases", async (req, res) => {
    try {
      const useCases = await storage.getUseCases();
      res.json(useCases);
    } catch (error) {
      console.error('Error getting use cases:', error);
      res.status(500).json({ error: 'Failed to get use cases' });
    }
  });

  // Comparison features
  app.get("/api/comparison", async (req, res) => {
    try {
      const features = await storage.getComparisonFeatures();
      res.json(features);
    } catch (error) {
      console.error('Error getting comparison features:', error);
      res.status(500).json({ error: 'Failed to get comparison features' });
    }
  });

  // Market statistics
  app.get("/api/market-stats", async (req, res) => {
    try {
      const stats = await storage.getMarketStats();
      res.json(stats);
    } catch (error) {
      console.error('Error getting market stats:', error);
      res.status(500).json({ error: 'Failed to get market stats' });
    }
  });

  // Integration examples
  app.get("/api/integration-examples", async (req, res) => {
    try {
      const examples = await storage.getIntegrationExamples();
      res.json(examples);
    } catch (error) {
      console.error('Error getting integration examples:', error);
      res.status(500).json({ error: 'Failed to get integration examples' });
    }
  });

  // Tech features
  app.get("/api/tech-features", async (req, res) => {
    try {
      const features = await storage.getTechFeatures();
      res.json(features);
    } catch (error) {
      console.error('Error getting tech features:', error);
      res.status(500).json({ error: 'Failed to get tech features' });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      await storage.submitContactForm(validatedData);
      res.json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: 'Invalid form data', details: error.errors });
      }
      res.status(500).json({ error: 'Failed to submit contact form' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
