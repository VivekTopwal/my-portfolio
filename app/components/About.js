"use client";

import { motion } from "framer-motion";
import { Code, Database, Server } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="text-purple-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate MERN Stack Developer focused on building 
              scalable, high-performance web applications. I enjoy turning 
              complex problems into simple, beautiful, and intuitive solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              With hands-on experience in React, Next.js, Node.js, and MongoDB, 
              I specialize in full-stack development — from designing responsive 
              frontends to building secure backend systems and APIs.
            </p>
          </motion.div>

          {/* Right Side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-purple-500 transition">
              <Code className="text-purple-500 mb-3" size={28} />
              <h3 className="text-lg font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">
                React, Next.js, Tailwind CSS, Framer Motion
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-purple-500 transition">
              <Server className="text-purple-500 mb-3" size={28} />
              <h3 className="text-lg font-semibold mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">
                Node.js, Express, REST APIs, Authentication
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-purple-500 transition">
              <Database className="text-purple-500 mb-3" size={28} />
              <h3 className="text-lg font-semibold mb-2">Database</h3>
              <p className="text-gray-400 text-sm">
                MongoDB, Mongoose, Data Modeling
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}