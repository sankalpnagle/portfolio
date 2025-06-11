"use client";
import Ball from "./Ball";

export default function MovingGradientBg() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <Ball
          key={index}
          size={10}
          speed={1} // random speed between 2–4
          initialAngle={(Math.PI * 2 * index) / 5} // evenly spread angles
          color={`#5ba9cd`} // random pastel colors
        />
      ))}
    </>
  );
}
