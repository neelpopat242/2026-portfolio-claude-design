"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          className="font-mono text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-accent">np</span> &copy;{" "}
          {new Date().getFullYear()}
        </motion.p>

        <motion.p
          className="font-mono text-xs text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          designed &amp; built with care
        </motion.p>

        <div className="flex items-center gap-6">
          {[
            { name: "GitHub", href: "https://github.com/neelpopat242" },
            { name: "LinkedIn", href: "https://linkedin.com/in/neelpopat242" },
            { name: "LeetCode", href: "https://leetcode.com/neelpopat242" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-muted hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
