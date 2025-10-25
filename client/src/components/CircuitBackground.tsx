import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  progress: number;
  speed: number;
  size: number;
  opacity: number;
  pathIndex: number;
}

interface Node {
  x: number;
  y: number;
  pulse: number;
  pulseSpeed: number;
}

interface EnergyPath {
  startX: number;
  startY: number;
  cp1X: number;
  cp1Y: number;
  cp2X: number;
  cp2Y: number;
  endX: number;
  endY: number;
  opacity: number;
}

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', resize);

    // Gold color palette
    const goldColor = '#FFD700'; // Primary gold
    const accentGold = '#E6C200'; // Accent gold

    // Create flowing energy paths (Bezier curves)
    const createEnergyPaths = (): EnergyPath[] => {
      const paths: EnergyPath[] = [];
      const numPaths = 12; // Number of energy streams
      
      for (let i = 0; i < numPaths; i++) {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = Math.random() * window.innerWidth;
        const endY = Math.random() * window.innerHeight;
        
        // Create smooth flowing curves with control points
        const cp1X = startX + (Math.random() - 0.5) * 400;
        const cp1Y = startY + (Math.random() - 0.5) * 400;
        const cp2X = endX + (Math.random() - 0.5) * 400;
        const cp2Y = endY + (Math.random() - 0.5) * 400;
        
        paths.push({
          startX,
          startY,
          cp1X,
          cp1Y,
          cp2X,
          cp2Y,
          endX,
          endY,
          opacity: 0.08 + Math.random() * 0.12, // Varied opacity
        });
      }
      
      return paths;
    };

    // Create connection nodes at path intersections
    const createNodes = (): Node[] => {
      const nodes: Node[] = [];
      const numNodes = 8;
      
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }
      
      return nodes;
    };

    // Create particles that flow along the paths
    const createParticles = (numParticles: number, numPaths: number): Particle[] => {
      const particles: Particle[] = [];
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: 0,
          y: 0,
          progress: Math.random(), // Position along the path (0-1)
          speed: 0.0008 + Math.random() * 0.0012, // Varied speed for depth
          size: 2 + Math.random() * 3, // Varied sizes
          opacity: 0.4 + Math.random() * 0.4,
          pathIndex: Math.floor(Math.random() * numPaths),
        });
      }
      
      return particles;
    };

    const energyPaths = createEnergyPaths();
    const nodes = createNodes();
    const particles = createParticles(35, energyPaths.length);

    // Helper function to get point on Bezier curve
    const getPointOnCurve = (path: EnergyPath, t: number): { x: number; y: number } => {
      const t2 = t * t;
      const t3 = t2 * t;
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;

      return {
        x: path.startX * mt3 + 3 * path.cp1X * mt2 * t + 3 * path.cp2X * mt * t2 + path.endX * t3,
        y: path.startY * mt3 + 3 * path.cp1Y * mt2 * t + 3 * path.cp2Y * mt * t2 + path.endY * t3,
      };
    };

    // Draw energy path with gradient
    const drawEnergyPath = (path: EnergyPath) => {
      if (!ctx) return;
      
      ctx.save();
      ctx.strokeStyle = `rgba(230, 194, 0, ${path.opacity})`;
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = accentGold;
      
      ctx.beginPath();
      ctx.moveTo(path.startX, path.startY);
      ctx.bezierCurveTo(path.cp1X, path.cp1Y, path.cp2X, path.cp2Y, path.endX, path.endY);
      ctx.stroke();
      
      ctx.restore();
    };

    // Draw particle with glow effect
    const drawParticle = (particle: Particle) => {
      if (!ctx) return;
      
      ctx.save();
      
      // Outer glow
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 4
      );
      gradient.addColorStop(0, `rgba(255, 215, 0, ${particle.opacity * 0.8})`);
      gradient.addColorStop(0.4, `rgba(230, 194, 0, ${particle.opacity * 0.4})`);
      gradient.addColorStop(1, 'rgba(230, 194, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Core particle
      ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = goldColor;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Draw pulsing connection node
    const drawNode = (node: Node) => {
      if (!ctx) return;
      
      const pulseSize = 3 + Math.sin(node.pulse) * 2;
      const pulseOpacity = 0.3 + Math.sin(node.pulse) * 0.2;
      
      ctx.save();
      
      // Outer pulse
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, pulseSize * 3
      );
      gradient.addColorStop(0, `rgba(255, 215, 0, ${pulseOpacity * 0.6})`);
      gradient.addColorStop(1, 'rgba(230, 194, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Core node
      ctx.fillStyle = `rgba(255, 215, 0, ${pulseOpacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = goldColor;
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;
      
      // Clear canvas with slight trail effect for smoother animation
      ctx.fillStyle = 'rgba(13, 13, 13, 0.1)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Draw energy paths
      energyPaths.forEach(path => {
        drawEnergyPath(path);
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle along its path
        particle.progress += particle.speed;
        
        // Loop particle when it reaches the end
        if (particle.progress >= 1) {
          particle.progress = 0;
        }
        
        // Get position on the Bezier curve
        const path = energyPaths[particle.pathIndex];
        const point = getPointOnCurve(path, particle.progress);
        particle.x = point.x;
        particle.y = point.y;
        
        drawParticle(particle);
      });
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.pulse += node.pulseSpeed;
        drawNode(node);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }

    // Initial clear
    ctx.fillStyle = '#0D0D0D';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
