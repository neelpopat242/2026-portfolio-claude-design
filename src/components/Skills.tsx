"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: "{ }",
    skills: [
      { name: "Python", level: 95 },
      { name: "Django", level: 95 },
      { name: "FastAPI", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 60 },
    ],
  },
  {
    title: "Databases",
    icon: "db",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: ">>",
    skills: [
      { name: "AWS", level: 85 },
      { name: "GCP", level: 70 },
      { name: "Docker", level: 85 },
      { name: "Jenkins", level: 80 },
      { name: "CI/CD", level: 90 },
      { name: "Kafka", level: 60 },
    ],
  },
  {
    title: "Architecture & Practices",
    icon: "~/",
    skills: [
      { name: "Microservices", level: 85 },
      { name: "System Design", level: 85 },
      { name: "API Design", level: 90 },
      { name: "LLM / RAG", level: 75 },
      { name: "Celery / Async Queues", level: 80 },
      { name: "Git", level: 90 },
      { name: "New Relic", level: 75 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">03</span>
            <h2 className="text-3xl md:text-4xl font-light">Skills</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                className="bg-bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + catIdx * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-accent text-lg">
                    {category.icon}
                  </span>
                  <h3 className="font-medium text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-text-secondary font-mono">
                          {skill.name}
                        </span>
                        <span className="text-xs text-text-muted font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, var(--accent), var(--accent-hover))",
                          }}
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${skill.level}%` } : {}
                          }
                          transition={{
                            delay: 0.5 + catIdx * 0.1 + skillIdx * 0.05,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
