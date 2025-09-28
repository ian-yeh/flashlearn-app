import React, { useState, useEffect } from "react";

// Type definitions for particles and connections
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  opacity: number;
}

interface ConnectedParticlesProps {
  count?: number;
}

// Enhanced Particles with connecting lines (more AI-tech feel)
const ConnectedParticles: React.FC<ConnectedParticlesProps> = ({ count = 30 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const generateParticles = (): Particle[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.2,
        vx: (Math.random() - 0.5) * 0.5, // velocity x
        vy: (Math.random() - 0.5) * 0.5, // velocity y
      }));
    };

    const newParticles = generateParticles();
    setParticles(newParticles);

    // Generate connections between nearby particles
    const generateConnections = (): Connection[] => {
      const lines: Connection[] = [];
      for (let i = 0; i < newParticles.length; i++) {
        for (let j = i + 1; j < newParticles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(newParticles[i].x - newParticles[j].x, 2) +
              Math.pow(newParticles[i].y - newParticles[j].y, 2)
          );

          if (distance < 20) {
            // Connect particles within 20% distance
            lines.push({
              from: newParticles[i],
              to: newParticles[j],
              opacity: Math.max(0, 0.3 - distance / 100),
            });
          }
        }
      }
      return lines;
    };

    setConnections(generateConnections());
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection, i) => (
          <line
            key={i}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke="rgb(59, 130, 246)"
            strokeWidth="1"
            opacity={connection.opacity}
            className="animate-pulse"
          />
        ))}
      </svg>

      {/* Particles */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-blue-400 ${
            index % 3 === 0 ? 'animate-float' : 
            index % 3 === 1 ? 'animate-float-up' : 
            'animate-float-down'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConnectedParticles;