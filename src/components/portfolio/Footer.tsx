export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rahul Singh — Crafted with React & Framer Motion
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-[var(--neon-cyan)]">●</span> Built for the future
        </div>
      </div>
    </footer>
  );
}