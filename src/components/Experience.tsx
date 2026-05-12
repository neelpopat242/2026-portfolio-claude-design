"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Backend Engineer",
    company: "The Wedding Company",
    badge: "YC W'21",
    period: "Jan 2023 — Present",
    location: "Bengaluru, Karnataka",
    highlights: [
      {
        title: "Payment Orchestration",
        desc: "Architected a multi-rail payment system integrating Juspay, Razorpay, and DBS Bank with adapter/strategy patterns. Designed ACID-compliant settlement workflows with idempotent APIs and retry/backoff logic to unify gateways.",
        tags: ["Django", "System Design", "Payments", "Idempotent APIs"],
      },
      {
        title: "Financial Ledger & Reconciliation",
        desc: "Built a double-entry financial ledger with immutable audit trails, daily reconciliations, and exception pipelines — enabling real-time financial transparency and audit readiness.",
        tags: ["MongoDB", "Django", "Fintech", "ACID"],
      },
      {
        title: "Feedback Microservice",
        desc: "Engineered an event-driven feedback microservice collecting responses via SMS, Gupshup, and Mailmodo with retry policies, crontab-based scheduling, and bi-directional sync. Improved response rates significantly.",
        tags: ["Microservices", "Event-Driven", "Reliability"],
      },
      {
        title: "CI/CD & Zero-Downtime Deployments",
        desc: "Automated Docker builds via Jenkins with zero-downtime rollouts for backend and frontend. Cut release cycles from hours to minutes, reducing deployment times by 90%.",
        tags: ["Jenkins", "Docker", "CI/CD", "Zero-Downtime"],
      },
      {
        title: "Serverless Media Compression",
        desc: "Implemented a Python-based serverless microservice optimizing media assets. Reduced CDN costs by 40% and improved Lighthouse performance scores by +10 points.",
        tags: ["AWS Lambda", "Python", "Performance", "Serverless"],
      },
      {
        title: "Venue Availability Forecasting",
        desc: "Designed a data pipeline forecasting venue availability with 93% accuracy. Automated aggregation of 6 months of multi-aggregator data with daily refreshes, replacing manual calling entirely.",
        tags: ["Data Pipeline", "ETL", "Automation"],
      },
      {
        title: "CRM Integration + Alfred Scheduler",
        desc: "Shipped a CRM-connected questionnaire with event-driven APIs enabling bi-directional sync across scheduling and sales. Handles 100+ meetings/day, reducing unanswered calls by 52% and improving lead-to-meeting conversion from 40% → 58%.",
        tags: ["CRM", "Event-Driven", "Scheduling", "Growth"],
      },
      {
        title: "Workflow Automation — Venue Proposals",
        desc: "Engineered a proposal engine with rule-based orchestration and template-driven APIs via Canva. Reduced turnaround from 24–48h to ~10s, scaling throughput to 800+ proposals/day with Celery async job queues.",
        tags: ["Canva API", "Celery", "Async Queues", "Automation"],
      },
    ],
  },
  {
    role: "Consultant Backend Developer",
    company: "Arthneeti",
    badge: "AI / Fintech",
    period: "Jan 2025",
    location: "Remote",
    highlights: [
      {
        title: "Full-Stack AI Platform",
        desc: "Built end-to-end backend (Django, Python, AWS) and frontend (Next.js) for an AI-driven platform analyzing earnings-call transcripts and filings across 2,000+ publicly listed companies with 5+ years of history.",
        tags: ["Django", "Next.js", "AWS", "Full-Stack"],
      },
      {
        title: "RAG-Powered Earnings Intelligence",
        desc: "Implemented retrieval + LLM chat over earnings data for natural-language queries, plus features like 2-minute insights, portfolio X-ray, and institutional-style comps.",
        tags: ["LLM", "RAG", "NLP", "AI"],
      },
      {
        title: "Stock Scoring & Ranking System",
        desc: "Designed a scoring system ranking stocks using signals extracted from past concalls — guidance tone, management sentiment, QoQ/YoY trends, revenue/margin commentary — with sortable filters and watchlists.",
        tags: ["Data Engineering", "Scoring", "Analytics"],
      },
      {
        title: "Large-Scale PDF Ingestion Pipeline",
        desc: "Batch-ingested and parsed 5,000+ earnings-call PDFs from Indian equities. Used retrieval + LLM Q&A to extract forward-looking expectations, producing a ranked shortlist of ~500 companies.",
        tags: ["ETL", "PDF Parsing", "LLM", "Pipeline"],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 bg-bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">02</span>
            <h2 className="text-3xl md:text-4xl font-light">Experience</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          {experiences.map((exp, expIdx) => (
            <div key={exp.company} className={expIdx > 0 ? "mt-24" : ""}>
              {/* Company header */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-medium">{exp.role}</h3>
                  <span className="text-text-muted">at</span>
                  <span className="text-accent font-medium text-xl">
                    {exp.company}
                  </span>
                  <span className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
                    {exp.badge}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-muted font-mono">
                  <span>{exp.period}</span>
                  <span className="w-1 h-1 rounded-full bg-text-muted" />
                  <span>{exp.location}</span>
                </div>
              </motion.div>

              {/* Highlights grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {exp.highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="group bg-bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <h4 className="font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 pl-5">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pl-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-mono text-text-muted bg-bg-secondary rounded-md border border-border-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Leadership note */}
          <motion.div
            className="mt-8 p-6 border border-border rounded-2xl bg-bg-card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              <span className="text-accent font-mono text-xs mr-2">+</span>
              Led design reviews, authored runbooks, reviewed peers&apos; code
              for style and correctness, and triaged production issues
              end-to-end using logs/metrics/tracing, improving overall system
              reliability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
