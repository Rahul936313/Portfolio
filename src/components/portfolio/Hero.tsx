import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import rahulImage from "@/assets/rahul.jpg?url";

const phrases = [
  "AI & Data Science Developer",
  "Machine Learning Engineer",
  "Full-Stack Builder",
  "Problem Solver",
];

function useTyper() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = phrases[i % phrases.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(cur.slice(0, text.length + 1));
        if (text.length + 1 === cur.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(cur.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyper();
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const m = (e: MouseEvent) => setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div
        className="absolute inset-0 -z-10 opacity-40 transition-all duration-300"
        style={{ background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, oklch(0.65 0.27 295 / 0.35), transparent 60%)` }}
      />
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
      <div className="absolute top-12 left-2 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl animate-blob -z-10" />
      <div className="absolute bottom-12 right-2 sm:right-10 w-40 h-40 sm:w-96 sm:h-96 rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl animate-blob -z-10" style={{ animationDelay: "4s" }} />
      <div className="hidden sm:block absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[var(--neon-pink)] opacity-10 blur-3xl animate-blob -z-10" style={{ animationDelay: "8s" }} />

      <div className="max-w-6xl w-full mx-auto px-3 sm:px-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 md:gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="block text-muted-foreground text-xl sm:text-2xl md:text-3xl font-mono mb-2">$ whoami</span>
            Rahul <span className="text-gradient">Singh</span>
          </h1>
          <div className="text-base sm:text-xl md:text-2xl font-mono text-muted-foreground mb-6 h-8 break-words">
            <span className="text-[var(--neon-cyan)]">&gt;</span> {typed}
            <span className="animate-blink">_</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Building intelligent, interactive, and impactful digital experiences with AI, machine learning, and modern web technology.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 bg-gradient-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium glow hover:scale-105 transition-transform">
              View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:border-[var(--neon-cyan)] transition">
              <Download size={16} /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 glass px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:border-[var(--neon-purple)] transition">
              <Mail size={16} /> Contact
            </a>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/Rahul936313" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg hover:text-[var(--neon-cyan)] transition"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/rahul-singh-nirwan-41303a323/" target="_blank" rel="noreferrer" className="p-2 glass rounded-lg hover:text-[var(--neon-blue)] transition"><Linkedin size={18} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-neon blur-3xl opacity-40 rounded-full" />
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-neon animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-card">
              <img src={rahulImage} alt="Rahul Singh" className="w-full h-full object-cover" />
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[var(--neon-cyan)]/40"
          />
        </motion.div>
      </div>
    </section>
  );
}