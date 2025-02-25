"use client";
import { cn } from "../../utils/cn";
import { useEffect, useRef, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStar, setShootingStar] = useState<ShootingStar | null>(null);

  // Generate initial stars
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  // Handle shooting stars
  useEffect(() => {
    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 4);
      const offset = Math.random() * 100;
      let x, y, angle;

      switch (side) {
        case 0: // top
          x = offset;
          y = 0;
          angle = 45;
          break;
        case 1: // right
          x = 100;
          y = offset;
          angle = 135;
          break;
        case 2: // bottom
          x = offset;
          y = 100;
          angle = 225;
          break;
        default: // left
          x = 0;
          y = offset;
          angle = 315;
      }

      setShootingStar({
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * 2 + 1,
        distance: 0,
      });
    };

    const interval = setInterval(createShootingStar, Math.random() * 3000 + 1200);
    return () => clearInterval(interval);
  }, []);

  // Animate shooting star
  useEffect(() => {
    const moveStar = () => {
      if (shootingStar) {
        setShootingStar((prev) => {
          if (!prev) return null;
          const newX = prev.x + prev.speed * Math.cos((prev.angle * Math.PI) / 180);
          const newY = prev.y + prev.speed * Math.sin((prev.angle * Math.PI) / 180);
          const newDistance = prev.distance + prev.speed;

          if (newX < -10 || newX > 110 || newY < -10 || newY > 110) {
            return null;
          }

          return {
            ...prev,
            x: newX,
            y: newY,
            distance: newDistance,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [shootingStar]);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300",
        className
      )}
    >
      {/* Background with dark gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-black to-black" />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Shooting star */}
      {shootingStar && (
        <div
          className="absolute h-[2px] w-[80px] bg-gradient-to-r from-transparent via-purple-500 to-white"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
            transform: `rotate(${shootingStar.angle}deg)`,
            opacity: 0.8,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
          }}
        />
      )}

      {/* Ambient light effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-50" />
    </div>
  );
}; 