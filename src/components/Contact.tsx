"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "Email",
    value: "neelpopat.exp@gmail.com",
    href: "mailto:neelpopat.exp@gmail.com",
    icon: "@",
  },
  {
    label: "Phone",
    value: "+91 8320949532",
    href: "tel:+918320949532",
    icon: "#",
  },
  {
    label: "GitHub",
    value: "neelpopat242",
    href: "https://github.com/neelpopat242",
    icon: "~/",
  },
  {
    label: "LinkedIn",
    value: "neelpopat242",
    href: "https://linkedin.com/in/neelpopat242",
    icon: "in",
  },
  {
    label: "LeetCode",
    value: "neelpopat242",
    href: "https://leetcode.com/neelpopat242",
    icon: "<>",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-accent text-sm">05</span>
            <h2 className="text-3xl md:text-4xl font-light">Contact</h2>
            <div className="flex-1 h-[1px] bg-border ml-4" />
          </div>

          <div className="text-center mb-16">
            <motion.h3
              className="text-3xl md:text-5xl font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let&apos;s build something{" "}
              <span className="text-accent font-medium">together</span>
            </motion.h3>
            <motion.p
              className="text-text-secondary max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I&apos;m always interested in discussing backend architecture,
              system design challenges, or new opportunities. Drop me a line.
            </motion.p>
          </div>

          {/* Links */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group bg-bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="font-mono text-accent text-lg mb-3 block group-hover:scale-110 transition-transform origin-left">
                  {link.icon}
                </span>
                <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-1">
                  {link.label}
                </p>
                <p className="text-sm text-text-primary group-hover:text-accent transition-colors duration-300">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="mailto:neelpopat.exp@gmail.com"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-accent text-white rounded-full text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="relative z-10">Say Hello</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-accent-hover scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
