import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-xs text-[var(--neon-cyan)] mb-2 tracking-widest uppercase">// {eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}