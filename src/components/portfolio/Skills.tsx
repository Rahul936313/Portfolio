import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";

const groups = {
  Languages: ["Python", "Java", "C++", "SQL", "TypeScript", "React", "HTML", "CSS"],
  "Frameworks & Libraries": ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "FastAPI"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub Copilot", "Cursor", "Claude AI"],
};

export function Skills() {
  const cats = ["All", ...Object.keys(groups)];
  const [active, setActive] = useState<string>("All");
  const items: { name: string; group: string }[] =
    active === "All"
      ? Object.entries(groups).flatMap(([g, arr]) => arr.map((n) => ({ name: n, group: g })))
      : (groups as Record<string, string[]>)[active].map((n) => ({ name: n, group: active }));

  return (
    <Section id="skills" eyebrow="skills & stack" title={<>Tools I use to <span className="text-gradient">build</span></>}>
      <div className="flex flex-wrap gap-2 mb-8">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active === c ? "bg-gradient-primary text-white glow" : "glass hover:border-[var(--neon-cyan)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((s, i) => (
            <motion.div
              key={s.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4, rotate: -1 }}
              className="glass rounded-xl p-4 text-center group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="font-medium relative">{s.name}</div>
              <div className="text-[10px] font-mono text-muted-foreground mt-1 relative">{s.group}</div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}