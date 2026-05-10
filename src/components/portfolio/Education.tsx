import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="education" title={<>Academic <span className="text-gradient">journey</span></>}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        className="neon-border rounded-3xl p-8 md:p-10 relative overflow-hidden group"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl group-hover:opacity-40 transition" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl group-hover:opacity-40 transition" />
        <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow">
            <GraduationCap size={28} />
          </div>
          <div>
            <div className="font-mono text-xs text-[var(--neon-cyan)] mb-1">2024 — 2028</div>
            <h3 className="text-2xl font-bold mb-1">Poornima University</h3>
            <p className="text-muted-foreground">Bachelor of Computer Science — AI & Data Science</p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-4xl font-bold text-gradient">8.08</div>
            <div className="text-xs font-mono text-muted-foreground">CGPA</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}