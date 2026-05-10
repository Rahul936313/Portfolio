import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Code2, Rocket, Sparkles } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Tech Stack", value: "15+" },
  { label: "CGPA", value: "8.08" },
  { label: "Hackathons", value: "SIH'25" },
];

const traits = [
  { icon: Brain, title: "AI-First Thinking", desc: "Architecting ML models that solve real-world problems." },
  { icon: Code2, title: "Full-Stack Craft", desc: "From data pipelines to polished interactive UIs." },
  { icon: Rocket, title: "Ship Fast", desc: "Iterating quickly with modern tools and clean code." },
  { icon: Sparkles, title: "Design Sense", desc: "Building experiences that feel as good as they perform." },
];

export function About() {
  return (
    <Section id="about" eyebrow="about me" title={<>The <span className="text-gradient">developer</span> behind the code</>}>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm <span className="text-foreground font-medium">Rahul Singh</span>, a B.Tech CSE student specializing in
            <span className="text-[var(--neon-cyan)]"> Artificial Intelligence and Data Science</span>. I love turning
            ideas into innovative, secure, and user-friendly applications.
          </p>
          <p>
            My focus is on AI, full-stack development, machine learning, and shipping
            impactful projects that solve real problems — bridging research-grade
            models with delightful product experiences.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 hover:border-[var(--neon-purple)] transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <t.icon size={18} />
              </div>
              <h3 className="font-semibold mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}