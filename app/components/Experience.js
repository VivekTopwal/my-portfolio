// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Experience() {
//   const skills = [
//     { name: "React", level: 90 },
//     { name: "Next.js", level: 85 },
//     { name: "Node.js", level: 80 },
//     { name: "MongoDB", level: 75 },
//   ];

//   const stats = [
//     { label: "Projects Completed", value: 12 },
//     { label: "Months Experience", value: 6 },
//     { label: "Technologies Used", value: 15 },
//   ];

//   const techStack = [
//     "React",
//     "Next.js",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "Tailwind CSS",
//     "Framer Motion",
//     "Git",
//     "REST API",
//   ];

//   return (
//     <section id="experience" className="py-24 bg-black text-white px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
//           Experience & <span className="text-purple-500">Skills</span>
//         </h2>

//         {/* ---------------- TIMELINE ---------------- */}
//         <div className="mb-20">
//           <h3 className="text-2xl font-semibold mb-8">Internship</h3>

//           <div className="border-l border-purple-500 pl-6 relative">
//             <div className="mb-10">
//               <span className="absolute -left-[9px] w-4 h-4 bg-purple-500 rounded-full" />
//               <h4 className="text-lg font-semibold">
//                 MERN Stack Intern
//               </h4>
//               <p className="text-gray-400 text-sm">
//                 6 Month Internship
//               </p>
//               <p className="text-gray-300 mt-2">
//                 Worked on full-stack rental management system including 
//                 authentication, dispute handling, and role-based access control.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ---------------- SKILL BARS ---------------- */}
//         <div className="mb-20">
//           <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>

//           <div className="space-y-6">
//             {skills.map((skill, index) => (
//               <div key={index}>
//                 <div className="flex justify-between mb-2">
//                   <span>{skill.name}</span>
//                   <span>{skill.level}%</span>
//                 </div>

//                 <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
//                   <motion.div
//                     className="bg-purple-500 h-3 rounded-full"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1 }}
//                     viewport={{ once: true }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ---------------- STATS COUNTER ---------------- */}
//         <div className="mb-20 grid md:grid-cols-3 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <Counter key={index} value={stat.value} label={stat.label} />
//           ))}
//         </div>

//         {/* ---------------- TECH STACK BADGES ---------------- */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-8 text-center">
//             Tech Stack
//           </h3>

//           <div className="flex flex-wrap justify-center gap-4">
//             {techStack.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-purple-500 transition"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ---------------- Animated Counter Component ---------------- */

// function Counter({ value, label }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1000;
//     const increment = value / (duration / 16);

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(counter);
//       } else {
//         setCount(Math.ceil(start));
//       }
//     }, 16);

//     return () => clearInterval(counter);
//   }, [value]);

//   return (
//     <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500 transition">
//       <h4 className="text-3xl font-bold text-purple-500">{count}+</h4>
//       <p className="text-gray-400 mt-2">{label}</p>
//     </div>
//   );
// }