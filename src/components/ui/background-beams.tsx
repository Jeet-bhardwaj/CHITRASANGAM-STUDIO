"use client";
import { cn } from "../../utils/cn";
import { useEffect, useRef, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
}

interface FallingStar {
  id: number;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  size: number;
  speed: number;
  opacity: number;
  progress: number;
}

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [fallingStars, setFallingStars] = useState<FallingStar[]>([]);
  const animationFrameRef = useRef<number>();

  // Initialize moving stars
  useEffect(() => {
    const stars: Star[] = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 0.05 + 0.02, // Speed of star movement
      direction: Math.random() * Math.PI * 2 // Random direction in radians
    }));
    setStars(stars);
  }, []);

  // Animate regular stars
  useEffect(() => {
    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => {
          // Calculate new position
          let newX = star.x + Math.cos(star.direction) * star.speed;
          let newY = star.y + Math.sin(star.direction) * star.speed;

          // Wrap around screen edges
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;

          return {
            ...star,
            x: newX,
            y: newY
          };
        })
      );
    };

    const starAnimationFrame = setInterval(animateStars, 50); // Update every 50ms
    return () => clearInterval(starAnimationFrame);
  }, []);

  // Create new falling stars
  const createFallingStar = () => {
    const startX = Math.random() * 100 + 20;
    const startY = Math.random() * 30;
    
    return {
      id: Date.now() + Math.random(),
      startX,
      startY,
      currentX: startX,
      currentY: startY,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 0.3 + 0.2,
      opacity: 1,
      progress: 0
    };
  };

  // Animation loop for falling stars
  useEffect(() => {
    let lastStarCreation = 0;
    const starCreationInterval = 200;

    const animate = (timestamp: number) => {
      if (timestamp - lastStarCreation > starCreationInterval) {
        setFallingStars(prev => {
          const newStars = Array.from(
            { length: Math.floor(Math.random() * 3) + 1 },
            createFallingStar
          );
          return [...prev, ...newStars];
        });
        lastStarCreation = timestamp;
      }

      setFallingStars(prev => 
        prev.map(star => {
          const progress = star.progress + star.speed;
          const currentX = star.startX - (progress * 100);
          const currentY = star.startY + (progress * 100);
          
          if (currentX < -10 || currentY > 110 || progress >= 1) {
            return null;
          }

          return {
            ...star,
            currentX,
            currentY,
            progress,
            opacity: 1 - progress
          };
        }).filter((star): star is FallingStar => star !== null)
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className={cn("fixed inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        from-purple-900/20 via-black to-black">
        
        {/* Nebula effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        </div>

        {/* Moving stars */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              transition: 'left 0.05s linear, top 0.05s linear'
            }}
          />
        ))}

        {/* Falling stars */}
        {fallingStars.map(star => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.currentX}%`,
              top: `${star.currentY}%`,
              opacity: star.opacity,
            }}
          >
            <div
              className="absolute rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `
                  0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.8),
                  0 0 ${star.size * 4}px ${star.size * 2}px rgba(147, 51, 234, 0.5)
                `,
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '3px',
                height: `${50 + star.progress * 100}px`,
                background: 'linear-gradient(to bottom, white, transparent)',
                transform: 'rotate(45deg)',
                transformOrigin: 'top',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}; 