"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useEffect } from "react";

interface BallProps {
  size?: number;
  speed?: number;
  initialAngle?: number;
  color?: string;
}

export default function Ball({
  size = 60,
  speed = 2.5,
  initialAngle = Math.random() * Math.PI * 2,
  color = "#5ba9cd",
}: BallProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const angleRef = useRef(initialAngle);

  useEffect(() => {
    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;

    const initialX = Math.random() * maxX;
    const initialY = Math.random() * maxY;

    x.set(initialX);
    y.set(initialY);
  }, []);

  useAnimationFrame(() => {
    const currentX = x.get();
    const currentY = y.get();

    const dx = Math.cos(angleRef.current) * speed;
    const dy = Math.sin(angleRef.current) * speed;

    let nextX = currentX + dx;
    let nextY = currentY + dy;

    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;

    if (nextX <= 0 || nextX >= maxX) {
      angleRef.current = Math.PI - angleRef.current;
    }
    if (nextY <= 0 || nextY >= maxY) {
      angleRef.current = -angleRef.current;
    }

    x.set(currentX + Math.cos(angleRef.current) * speed);
    y.set(currentY + Math.sin(angleRef.current) * speed);
  });

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        x,
        y,
        background: `radial-gradient(circle, ${color}, #72abca)`,
        boxShadow: `0 0 10px ${color}`,
        zIndex: -10,
        // filter: "blur(60px)",
        // opacity: 0.9,
      }}
    />
  );
}
