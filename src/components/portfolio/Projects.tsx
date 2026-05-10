import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Placement Prediction System",
    desc: "Machine learning project predicting student placement probability based on academic and skill-based criteria.",
    tech: ["Python", "scikit-learn", "PyTorch"],
    gradient: "from-cyan-500 to-blue-600",
    emoji: "🎯",
  },
  {
    title: "Password Manager",
    desc: "Secure password manager with encryption to safely store, view, and delete passwords.",
    tech: ["Python", "Streamlit"],
    gradient: "from-purple-500 to-pink-600",
    emoji: "🔐",
  },
  {
    title: "Gym Website",
    desc: "Premium, highly animated modern gym marketing website with cinematic motion design.",
    tech: ["React", "Vite", "Tailwind", "TypeScript"],
    gradient: "from-emerald-500 to-cyan-600",
    emoji: "💪",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="featured work" title={<>Projects that <span className="text-gradient">ship</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <TiltCard>
              <div className="neon-border rounded-2xl p-6 h-full flex flex-col group hover:glow-purple transition-shadow">
                <div className={`h-40 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-6xl mb-5 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-bg opacity-30" />
                  <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>{p.emoji}</motion.span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md glass">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-gradient-primary font-medium hover:scale-105 transition">
                    <ExternalLink size={12} /> Live
                  </a>
                  <a href="https://github.com/Rahul936313" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs px-3 py-2 rounded-lg glass hover:border-[var(--neon-cyan)] transition">
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}