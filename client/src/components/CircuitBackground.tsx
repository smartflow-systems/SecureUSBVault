import { useEffect, useRef } from 'react';

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

    // Create circuit wires
    const wires = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
    }));

    let animationFrameId: number;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.strokeStyle = 'rgba(230, 194, 0, 0.28)';
      ctx.lineWidth = 1;

      wires.forEach((wire) => {
        wire.x = (wire.x + wire.dx + window.innerWidth) % window.innerWidth;
        wire.y = (wire.y + wire.dy + window.innerHeight) % window.innerHeight;

        ctx.beginPath();
        ctx.moveTo(wire.x, wire.y);
        ctx.lineTo(
          wire.x + 8 * Math.sign(wire.dx || 1),
          wire.y + 8 * Math.sign(wire.dy || 1)
        );
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-25 z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
