import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact — ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
    window.location.href = `mailto:rsnr936313@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="contact" title={<>Let's <span className="text-gradient">build</span> something</>}>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "rsnr936313@gmail.com", href: "mailto:rsnr936313@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 9460309339", href: "tel:+919460309339" },
            { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className="glass rounded-xl p-4 flex items-center gap-4 hover:border-[var(--neon-cyan)] transition"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center"><c.icon size={16} /></div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">{c.label}</div>
                <div className="font-medium text-sm">{c.value}</div>
              </div>
            </motion.a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="https://github.com/Rahul936313" target="_blank" rel="noreferrer" className="glass p-3 rounded-xl hover:text-[var(--neon-cyan)] hover:scale-110 transition"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/rahul-singh-nirwan-41303a323/" target="_blank" rel="noreferrer" className="glass p-3 rounded-xl hover:text-[var(--neon-blue)] hover:scale-110 transition"><Linkedin size={18} /></a>
          </div>
        </div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 space-y-4 relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)] transition" />
            <input required type="email" name="email" placeholder="Email" className="bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)] transition" />
          </div>
          <textarea required name="message" rows={5} placeholder="Tell me about your project..." className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--neon-purple)] transition resize-none" />
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary py-3 rounded-lg font-medium glow hover:scale-[1.02] transition">
            {sent ? "Opening mail client…" : <>Send Message <Send size={14} /></>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}