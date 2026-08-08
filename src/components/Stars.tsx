"use client";

import { motion } from "motion/react";

const stars = [
  { x: -150, y: -150, dx: -15, dy: -25, delay: 0 },
  { x: -110, y: -210, dx: 20, dy: -15, delay: 0.8 },
  { x: -165, y: -40, dx: -10, dy: 20, delay: 1.5 },
  { x: -140, y: 90, dx: 15, dy: -20, delay: 2.2 },
  { x: -170, y: 190, dx: -20, dy: -10, delay: 0.4 },

  { x: 150, y: -170, dx: 20, dy: -20, delay: 1.2 },
  { x: 115, y: -230, dx: -15, dy: 15, delay: 2 },
  { x: 170, y: -60, dx: 15, dy: 20, delay: 0.6 },
  { x: 145, y: 80, dx: -20, dy: -15, delay: 1.8 },
  { x: 170, y: 190, dx: 15, dy: -20, delay: 2.6 },

  { x: -70, y: -230, dx: 10, dy: -15, delay: 1.1 },
  { x: 70, y: -240, dx: -10, dy: 20, delay: 2.4 },

  { x: -190, y: 0, dx: 20, dy: -10, delay: 0.3 },
  { x: 190, y: 20, dx: -20, dy: 15, delay: 1.7 },

  { x: -100, y: 230, dx: 15, dy: -20, delay: 2.1 },
  { x: 100, y: 220, dx: -15, dy: -15, delay: 0.9 },

  { x: -210, y: 130, dx: 20, dy: 20, delay: 1.4 },
  { x: 210, y: -120, dx: -15, dy: 15, delay: 2.8 },

  { x: -40, y: 250, dx: -10, dy: -15, delay: 1.9 },
  { x: 40, y: -260, dx: 15, dy: 10, delay: 0.5 },
];

export default function Stars() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="
            absolute
            text-slate-300
            text-xs
            select-none
          "
          style={{
            left: "50%",
            top: "50%",
            x: star.x,
            y: star.y,
          }}
          animate={{
            x: [star.x, star.x + star.dx, star.x],
            y: [star.y, star.y + star.dy, star.y],
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + (i % 4),
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}