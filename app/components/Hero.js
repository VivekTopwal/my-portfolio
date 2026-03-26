"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Animated Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Small Intro */}
          <p className="text-purple-400 mb-4 tracking-widest">
            FULL STACK DEVELOPER
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-purple-500">Vivek</span> 👋
          </h1>

          {/* Typing Role */}
          <h2 className="mt-6 text-xl md:text-2xl text-gray-300 h-10">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Next.js Enthusiast",
                "Building Scalable Web Apps",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I build modern, scalable and performance-focused web applications 
            using React, Next.js, Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white transition shadow-lg shadow-purple-600/30"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-white transition"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-6 text-gray-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="mailto:youremail@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <FaEnvelope size={30} />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}