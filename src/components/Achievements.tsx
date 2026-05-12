"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    icon: "🏆",
    title: "Best Fintech Hack",
    event: "Ingenious Hackathon 2022",
    desc: "Built a prototype inspired by smallcase, enabling curated crypto investment baskets.",
  },
  {
    icon: "🎤",
    title: "Kickstart Web Dev Seminar",
    event: "Ahmedabad University",
    desc: "Delivered a web development seminar to 210+ students.",
  },
  {
    icon: "🎓",
    title: "B.Tech in Computer Science",
    event: "Ahmedabad University · 2019–2023",
    desc: "Bachelor of Technology in Computer Science and Engineering.",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative bg-bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-[60px] group-hover:w-24 group-hover:h-24 transition-all duration-500" />
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h4 className="font-medium text-text-primary mb-1">
                {item.title}
              </h4>
              <p className="text-xs font-mono text-accent mb-3">
                {item.event}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
