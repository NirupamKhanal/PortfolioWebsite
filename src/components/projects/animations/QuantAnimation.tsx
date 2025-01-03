import React, { useEffect, useRef } from 'react';

export function QuantAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: { x: number; y: number }[] = [];
    let frame = 0;

    function brownianMotion() {
      if (points.length === 0) {
        points.push({ x: canvas.width / 2, y: canvas.height / 2 });
      }

      const lastPoint = points[points.length - 1];
      const newPoint = {
        x: lastPoint.x + (Math.random() - 0.5) * 4,
        y: lastPoint.y + (Math.random() - 0.5) * 4
      };

      points.push(newPoint);
      if (points.length > 100) points.shift();
    }

    function animate() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      brownianMotion();

      // Draw path
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = '#4F46E5';
      ctx.lineWidth = 2;
      ctx.stroke();

      frame++;
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