import React, { useEffect, useRef } from 'react';

export function PathfindingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const grid = Array(10).fill(0).map(() => Array(15).fill(0));
    const cellSize = 20;
    let currentPos = { x: 0, y: 0 };
    let path: Array<{ x: number; y: number }> = [];
    
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
          ctx.strokeStyle = '#666';
          ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }

      // Draw path
      if (path.length > 0) {
        ctx.beginPath();
        ctx.moveTo(path[0].x * cellSize + cellSize/2, path[0].y * cellSize + cellSize/2);
        for (let i = 1; i < path.length; i++) {
          ctx.lineTo(path[i].x * cellSize + cellSize/2, path[i].y * cellSize + cellSize/2);
        }
        ctx.strokeStyle = '#4F46E5';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw current position
      ctx.beginPath();
      ctx.arc(
        currentPos.x * cellSize + cellSize/2,
        currentPos.y * cellSize + cellSize/2,
        cellSize/3,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = '#EF4444';
      ctx.fill();

      // Update position
      if (path.length < 15) {
        path.push({ ...currentPos });
        currentPos.x = Math.min(currentPos.x + 1, grid[0].length - 1);
        if (currentPos.x === grid[0].length - 1) {
          currentPos.y = Math.min(currentPos.y + 1, grid.length - 1);
          if (currentPos.y < grid.length - 1) currentPos.x = 0;
        }
      } else {
        path = [];
        currentPos = { x: 0, y: 0 };
      }

      requestAnimationFrame(drawGrid);
    }

    drawGrid();
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