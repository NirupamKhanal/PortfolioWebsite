import React, { useEffect, useRef } from 'react';

export function NumericalAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let x = 0;
    const f = (x: number) => Math.sin(x) - 0.5; // Example function
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw axes
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.strokeStyle = '#666';
      ctx.stroke();

      // Draw function
      ctx.beginPath();
      for (let i = 0; i < canvas.width; i++) {
        const x = (i - canvas.width / 2) / 50;
        const y = f(x) * 50;
        if (i === 0) {
          ctx.moveTo(i, canvas.height / 2 - y);
        } else {
          ctx.lineTo(i, canvas.height / 2 - y);
        }
      }
      ctx.strokeStyle = '#4F46E5';
      ctx.stroke();

      // Animate root finding
      const root = canvas.width / 2 + x * 50;
      ctx.beginPath();
      ctx.arc(root, canvas.height / 2 - f(x) * 50, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#EF4444';
      ctx.fill();

      x += 0.02;
      if (x > Math.PI) x = 0;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      className="w-full h-48 rounded-lg bg-white dark:bg-gray-800"
    />
  );
}