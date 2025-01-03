import React, { useEffect, useRef } from 'react';

export function QuantumAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angle = 0;
    
    function drawBlochSphere() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 70;

      // Draw sphere
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius, radius * 0.6, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#4F46E5';
      ctx.stroke();

      // Draw state vector
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.6;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + x, centerY + y);
      ctx.strokeStyle = '#EF4444';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw arrow head
      ctx.beginPath();
      ctx.arc(centerX + x, centerY + y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#EF4444';
      ctx.fill();

      angle += 0.02;
      requestAnimationFrame(drawBlochSphere);
    }

    drawBlochSphere();
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