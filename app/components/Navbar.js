"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.id);
          }
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 80 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/70 backdrop-blur-lg border-b border-white/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-gray-600">
            Vivek<span className="text-purple-500">.</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-300">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  className={`transition ${
                    active === link.id
                      ? "text-purple-400"
                      : "hover:text-purple-400"
                  }`}
                >
                  {link.name}
                </a>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all duration-300 ${
                    active === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* Resume */}
            <li>
              <a
                href="/resume.pdf"
                download
                className="ml-4 flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition shadow-lg shadow-purple-600/30"
              >
                <Download size={16} />
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Animated Mobile Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-black z-50 p-8 shadow-2xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} className="text-white" />
                </button>
              </div>

              <ul className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg ${
                        active === link.id
                          ? "text-purple-400"
                          : "text-gray-300 hover:text-purple-400"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="/resume.pdf"
                download
                className="mt-10 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}