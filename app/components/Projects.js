// "use client";

// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// import { projects } from "@/app/data/projects";
// import Image from "next/image";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-24 bg-black text-white px-6"
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//           My <span className="text-purple-500">Projects</span>
//         </h2>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500 transition"
//             >
//               {/* Project Image */}
//               <div className="relative overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   width={100}
//                   height={100}
//                   className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     className="bg-white/10 p-3 rounded-full hover:bg-purple-500 transition"
//                   >
//                     <FaGithub size={20} />
//                   </a>

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     className="bg-white/10 p-3 rounded-full hover:bg-purple-500 transition"
//                   >
//                     <ExternalLink size={20} />
//                   </a>

//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-3">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
 import { FaGithub } from "react-icons/fa";
import { ExternalLink, X } from "lucide-react";
import { projects } from "@/app/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = ["All", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My <span className="text-purple-500">Projects</span>
        </h2>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-purple-600 border-purple-600"
                  : "border-white/20 hover:border-purple-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              className="rounded-2xl"
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient"
              >
                {/* Gradient Border Card */}
                <div className="bg-black rounded-2xl overflow-hidden group">

                  {/* Shimmer */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                      <button
                        onClick={() => setSelected(project)}
                        className="bg-white/10 p-3 rounded-full hover:bg-purple-500 transition"
                      >
                        <ExternalLink size={20} />
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        className="bg-white/10 p-3 rounded-full hover:bg-purple-500 transition"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              />

              <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-purple-500 p-8 rounded-2xl z-50 w-[90%] max-w-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    {selected.title}
                  </h3>
                  <button onClick={() => setSelected(null)}>
                    <X />
                  </button>
                </div>

                <p className="text-gray-400 mb-6">
                  {selected.longDescription}
                </p>

                <div className="flex gap-4">
                  <a
                    href={selected.live}
                    target="_blank"
                    className="bg-purple-600 px-4 py-2 rounded-full"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selected.github}
                    target="_blank"
                    className="border border-purple-500 px-4 py-2 rounded-full"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}