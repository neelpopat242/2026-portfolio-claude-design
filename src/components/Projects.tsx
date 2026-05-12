"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Arthneeti",
    subtitle: "AI Stock Analytics Platform",
    period: "Jan 2025",
    description:
      "An AI-driven platform that analyzes earnings-call transcripts and filings across 2000+ publicly listed companies with 5+ years of history.",
    features: [
      "Retrieval + chat over earnings data for natural-language queries",
      "2-minute insights, portfolio X-ray, and institutional-style comps",
      "Scoring system ranking stocks using signals from past concalls — guidance tone, management sentiment, QoQ/YoY trends",
      "Batch-ingested 5,000+ earnings-call PDFs with LLM-powered Q&A extraction",
      "Produced a ranked shortlist of ~500 companies from forward-looking revenue/margin expectations",
    ],
    stack: [
      "Django",
      "Python",
      "AWS",
      "Next.js",
      "LLM",
      "RAG",
      "PostgreSQL",
    ],
    metrics: [
      { label: "Companies Analyzed", value: "2,000+" },
      { label: "PDFs Ingested", value: "5,000+" },
      { label: "Years of Data", value: "5+" },
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">03</span>
            <h2 className="text-3xl md:text-4xl font-light">Projects</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative bg-bg-card border border-border rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-accent via-accent-hover to-accent" />

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl font-semibold group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
                        Featured
                      </span>
                    </div>
                    <p className="text-text-secondary text-lg">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-text-muted">
                    {project.period}
                  </span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      className="text-center p-4 bg-bg-secondary/50 rounded-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      <p className="text-2xl font-semibold text-accent">
                        {metric.value}
                      </p>
                      <p className="text-xs font-mono text-text-muted mt-1 uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <p className="font-mono text-xs text-text-muted mb-4 uppercase tracking-wider">
                    Key Features
                  </p>
                  <div className="space-y-3">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                      >
                        <span className="text-accent mt-1.5 text-xs">&#9654;</span>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-mono text-text-primary bg-bg-secondary rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
