"use client";
import { motion } from "framer-motion";
import React from "react";

export function Boxes() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {[...Array(20)].map((_, i) => {
        // Random values for each box
        const size = Math.random() * (150 - 50) + 50;  // between 50px and 150px
        const left = Math.random() * 100;              // percentage
        const top = Math.random() * 100;               // percentage
        const duration = Math.random() * (10 - 4) + 4;   // between 4s and 10s

        return (
          <motion.div
            key={i}
            className="absolute bg-white/10 backdrop-blur-lg rounded-lg"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 360, 0] }}
            transition={{ duration, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
        );
      })}
    </div>
  );
}
