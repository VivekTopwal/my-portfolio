"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold">
          Hi, Im Vivek 👋
        </h1>
        <p className="mt-4 text-gray-400">
          MERN Stack Developer | Next.js Enthusiast
        </p>
      </motion.div>
    </section>
  );
}