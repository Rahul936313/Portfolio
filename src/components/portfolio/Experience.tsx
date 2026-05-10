import { motion } from "framer-motion";
import { Section } from "./Section";
import { Trophy, BarChart3, Plane, GraduationCap } from "lucide-react";

const items = [
  { icon: Trophy, title: "Smart India Hackathon 2025", desc: "Participant — building solutions for national-scale problem statements.", tag: "2025" },
  { icon: BarChart3, title: "Deloitte Data Analytics Job Simulation", desc: "Hands-on data analysis and business intelligence workflows.", tag: "Forage" },
  { icon: Plane, title: "British Airways Data Science Simulation", desc: "Customer review NLP, predictive modelling, and stakeholder reporting.", tag: "Forage" },
  { icon: GraduationCap, title: "Tutedude Data Science Course", desc: "Structured learning path covering ML, statistics, and Python.", tag: "Cert." },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title={<>Achievements & <span className="text-gradient">milestones</span></>}>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon-purple)] to-transparent" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex md:items-center gap-4 md:gap-8 ${i % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-neon glow z-10" />
              <div className="md:w-1/2 pl-12 md:pl-0">
                <div className={`glass rounded-xl p-5 hover:border-[var(--neon-cyan)] transition ${i % 2 ? "md:mr-12" : "md:ml-12"}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <it.icon size={16} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded-md glass">{it.tag}</span>
                  </div>
                  <h3 className="font-bold mb-1">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}