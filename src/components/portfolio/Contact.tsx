import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";

const resumeUrl = "/resume.pdf";

export function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact — ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
    
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile, use mailto protocol which opens native email or Gmail app directly
      const mailtoUrl = `mailto:rsnr936313@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    } else {
      // For desktop, use Gmail web interface
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rsnr936313@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }
  };

  return (
    <Section id="contact" eyebrow="contact" title={<>Let's <span className="text-gradient">build</span> something</>}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8">
        <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "rsnr936313@gmail.com",
            },
            { icon: Phone, label: "Phone", value: "+91 9460309339" },
            { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India" },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className="glass rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:border-[var(--neon-cyan)] transition text-sm sm:text-base"
            >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0"><c.icon size={16} /></div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-xs sm:text-sm truncate">{c.value}</div>
                </div>
              </motion.div>
          ))}
          <div className="flex gap-2 sm:gap-3 pt-2">
            <a href="https://github.com/Rahul936313" target="_blank" rel="noreferrer" className="glass p-2.5 sm:p-3 rounded-xl hover:text-[var(--neon-cyan)] hover:scale-110 transition"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/rahul-singh-nirwan-41303a323/" target="_blank" rel="noreferrer" className="glass p-2.5 sm:p-3 rounded-xl hover:text-[var(--neon-blue)] hover:scale-110 transition"><Linkedin size={18} /></a>
          </div>
          <a href={resumeUrl} download="Rahul-Singh-Resume.pdf" target="_blank" rel="noreferrer" className="glass rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:border-[var(--neon-cyan)] transition text-sm sm:text-base font-medium max-w-max">
            <Download size={16} /> Download Resume
          </a>
        </div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-4 sm:p-6 space-y-4 relative overflow-hidden order-1 md:order-2"
        >
          <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input required name="name" placeholder="Your name" className="bg-background/50 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)] transition" />
            <input required type="email" name="email" placeholder="Email" className="bg-background/50 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-[var(--neon-cyan)] transition" />
          </div>
          <textarea required name="message" rows={4} placeholder="Tell me about your project..." className="w-full bg-background/50 border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-[var(--neon-purple)] transition resize-none" />
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary py-2.5 sm:py-3 rounded-lg font-medium text-sm glow hover:scale-[1.02] transition">
            Send Message <Send size={14} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}