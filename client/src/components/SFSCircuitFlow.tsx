import { useEffect, useRef } from 'react';

/**
 * SFS Circuit Flow Component
 * Animated golden circuit background for SmartFlow Systems
 */
export function SFSCircuitFlow({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<any[]>([]);
  const nodesRef = useRef<any[]>([]);
  const pathsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // SFS Brand Colors
    const colors = {
      gold: '#FFD700',
      goldAccent: '#E6C200',
      brown: '#3B2F2F',
      black: '#0D0D0D',
    };

    // Configuration
    const config = {
      particleCount: 30,
      nodeCount: 15,
      pathCount: 12,
      particleSpeed: 0.5,
    };

    // Resize canvas
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    // Create nodes
    const createNodes = () => {
      nodesRef.current = [];
      for (let i = 0; i < config.nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 2,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Create paths
    const createPaths = () => {
      pathsRef.current = [];
      for (let i = 0; i < config.pathCount; i++) {
        const startNode = nodesRef.current[Math.floor(Math.random() * nodesRef.current.length)];
        const endNode = nodesRef.current[Math.floor(Math.random() * nodesRef.current.length)];

        if (startNode !== endNode) {
          pathsRef.current.push({
            start: startNode,
            end: endNode,
            opacity: Math.random() * 0.3 + 0.1,
          });
        }
      }
    };

    // Create particles
    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < config.particleCount; i++) {
        const path = pathsRef.current[Math.floor(Math.random() * pathsRef.current.length)];
        if (path) {
          particlesRef.current.push({
            x: path.start.x,
            y: path.start.y,
            targetX: path.end.x,
            targetY: path.end.y,
            progress: Math.random(),
            speed: Math.random() * 0.003 + 0.001,
            size: Math.random() * 2 + 1,
            hue: Math.random() * 20 + 40,
          });
        }
      }
    };

    // Draw node
    const drawNode = (node: any) => {
      const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
      const radius = node.radius + pulse * 1.5;

      // Outer glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 3);
      gradient.addColorStop(0, `${colors.gold}40`);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = colors.gold;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();

      node.pulsePhase += 0.02;
    };

    // Draw path
    const drawPath = (path: any) => {
      ctx.strokeStyle = `${colors.brown}${Math.floor(path.opacity * 255)
        .toString(16)
        .padStart(2, '0')}`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(path.start.x, path.start.y);
      ctx.lineTo(path.end.x, path.end.y);
      ctx.stroke();
    };

    // Draw particle
    const drawParticle = (particle: any) => {
      // Update position
      particle.progress += particle.speed;
      if (particle.progress >= 1) {
        particle.progress = 0;
        // Find new path
        const newPath = pathsRef.current[Math.floor(Math.random() * pathsRef.current.length)];
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
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 3
      );
      gradient.addColorStop(0, `hsl(${particle.hue}, 100%, 60%)`);
      gradient.addColorStop(0.5, `hsl(${particle.hue}, 100%, 50%, 0.5)`);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Core particle
      ctx.fillStyle = colors.gold;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      // Clear with fade
      ctx.fillStyle = 'rgba(13, 13, 13, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw paths
      pathsRef.current.forEach((path) => drawPath(path));

      // Draw nodes
      nodesRef.current.forEach((node) => drawNode(node));

      // Draw particles
      particlesRef.current.forEach((particle) => drawParticle(particle));

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resize();
    createNodes();
    createPaths();
    createParticles();
    animate();

    // Event listeners
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        createNodes();
        createPaths();
        createParticles();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
