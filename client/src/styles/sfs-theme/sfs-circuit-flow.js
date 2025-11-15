/**
 * SFS Circuit Flow - Animated Golden Circuit Background
 * SmartFlow Systems Design System
 *
 * Creates flowing circuit-like pathways with golden particles
 * Optimized for performance with requestAnimationFrame
 */

class SFSCircuitFlow {
  constructor(canvasId = 'sfs-circuit') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.warn(`Canvas element #${canvasId} not found`);
      return;
    }

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.nodes = [];
    this.paths = [];
    this.animationId = null;
    this.isVisible = true;

    // SFS Brand Colors
    this.colors = {
      gold: '#FFD700',
      goldAccent: '#E6C200',
      brown: '#3B2F2F',
      black: '#0D0D0D'
    };

    // Configuration
    this.config = {
      particleCount: 30,
      nodeCount: 15,
      pathCount: 12,
      particleSpeed: 0.5,
      glowIntensity: 0.3,
      connectionDistance: 200
    };

    this.init();
  }

  init() {
    this.resize();
    this.createNodes();
    this.createPaths();
    this.createParticles();
    this.setupEventListeners();
    this.start();
  }

  resize() {
    const parent = this.canvas.parentElement;
    this.canvas.width = parent.clientWidth;
    this.canvas.height = parent.clientHeight;
  }

  createNodes() {
    this.nodes = [];
    for (let i = 0; i < this.config.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 3 + 2,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  createPaths() {
    this.paths = [];
    for (let i = 0; i < this.config.pathCount; i++) {
      const startNode = this.nodes[Math.floor(Math.random() * this.nodes.length)];
      const endNode = this.nodes[Math.floor(Math.random() * this.nodes.length)];

      if (startNode !== endNode) {
        this.paths.push({
          start: startNode,
          end: endNode,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    }
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.config.particleCount; i++) {
      const path = this.paths[Math.floor(Math.random() * this.paths.length)];
      if (path) {
        this.particles.push({
          x: path.start.x,
          y: path.start.y,
          targetX: path.end.x,
          targetY: path.end.y,
          progress: Math.random(),
          speed: Math.random() * 0.003 + 0.001,
          size: Math.random() * 2 + 1,
          hue: Math.random() * 20 + 40 // Gold hue range
        });
      }
    }
  }

  setupEventListeners() {
    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.resize();
        this.createNodes();
        this.createPaths();
        this.createParticles();
      }, 250);
    });

    // Visibility API for performance
    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
      if (this.isVisible) {
        this.start();
      } else {
        this.stop();
      }
    });
  }

  drawNode(node) {
    const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
    const radius = node.radius + pulse * 1.5;

    // Outer glow
    const gradient = this.ctx.createRadialGradient(
      node.x, node.y, 0,
      node.x, node.y, radius * 3
    );
    gradient.addColorStop(0, `${this.colors.gold}40`);
    gradient.addColorStop(1, 'transparent');

    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
    this.ctx.fill();

    // Core
    this.ctx.fillStyle = this.colors.gold;
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    this.ctx.fill();

    node.pulsePhase += 0.02;
  }

  drawPath(path) {
    this.ctx.strokeStyle = `${this.colors.brown}${Math.floor(path.opacity * 255).toString(16).padStart(2, '0')}`;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(path.start.x, path.start.y);
    this.ctx.lineTo(path.end.x, path.end.y);
    this.ctx.stroke();
  }

  drawParticle(particle) {
    // Update position
    particle.progress += particle.speed;
    if (particle.progress >= 1) {
      particle.progress = 0;
      // Find new path
      const newPath = this.paths[Math.floor(Math.random() * this.paths.length)];
      if (newPath) {
        particle.x = newPath.start.x;
        particle.y = newPath.start.y;
        particle.targetX = newPath.end.x;
        particle.targetY = newPath.end.y;
      }
    }

    // Interpolate position
    particle.x = particle.x + (particle.targetX - particle.x) * particle.progress;
    particle.y = particle.y + (particle.targetY - particle.y) * particle.progress;

    // Draw particle with glow
    const gradient = this.ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 3
    );
    gradient.addColorStop(0, `hsl(${particle.hue}, 100%, 60%)`);
    gradient.addColorStop(0.5, `hsl(${particle.hue}, 100%, 50%, 0.5)`);
    gradient.addColorStop(1, 'transparent');

    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
    this.ctx.fill();

    // Core particle
    this.ctx.fillStyle = this.colors.gold;
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  draw() {
    // Clear canvas with fade effect
    this.ctx.fillStyle = 'rgba(13, 13, 13, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw paths
    this.paths.forEach(path => this.drawPath(path));

    // Draw nodes
    this.nodes.forEach(node => this.drawNode(node));

    // Draw particles
    this.particles.forEach(particle => this.drawParticle(particle));
  }

  animate() {
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  start() {
    if (!this.animationId && this.isVisible) {
      this.animate();
    }
  }

  stop() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  destroy() {
    this.stop();
    window.removeEventListener('resize', this.resize);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }
}

// Auto-initialize if canvas exists
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('sfs-circuit');
    if (canvas) {
      window.sfsCircuitFlow = new SFSCircuitFlow('sfs-circuit');
    }
  });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SFSCircuitFlow;
}
