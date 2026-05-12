"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Systems Built", value: "15+" },
  { label: "Deployment Time Cut", value: "90%" },
  { label: "Daily Proposals Automated", value: "800+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">01</span>
            <h2 className="text-3xl md:text-4xl font-light">About</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            {/* Left column — text */}
            <div className="md:col-span-3 space-y-6">
              <motion.p
                className="text-xl md:text-2xl font-light leading-relaxed text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I&apos;m a backend engineer who obsesses over building systems
                that are{" "}
                <span className="text-accent font-medium">reliable</span>,{" "}
                <span className="text-accent font-medium">scalable</span>, and{" "}
                <span className="text-accent font-medium">maintainable</span>.
              </motion.p>

              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                From architecting payment orchestration layers that handle
                multiple gateways to building double-entry financial ledgers
                with immutable audit trails — I thrive on solving complex
                problems with clean, well-tested code.
              </motion.p>

              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I graduated with a B.Tech in Computer Science from Ahmedabad
                University and have been building production systems at The
                Wedding Company (a YC W&apos;21 company) since January 2023. I
                care deeply about code quality, system design, and shipping
                things that actually work.
              </motion.p>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="font-mono text-sm text-text-muted">
                  <span className="text-accent">$</span> cat interests.txt
                </p>
                <p className="font-mono text-sm text-text-secondary mt-1">
                  system design &middot; distributed systems &middot; fintech
                  &middot; data pipelines &middot; API design
                </p>
              </motion.div>
            </div>

            {/* Right column — stats */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="bg-bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <p className="text-3xl font-semibold text-accent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
