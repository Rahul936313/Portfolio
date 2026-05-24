export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 px-3 sm:px-6 mt-8 sm:mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="font-mono text-xs text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Rahul Singh — Crafted with React & Framer Motion
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-[var(--neon-cyan)]">●</span> Built for the future
        </div>
      </div>
    </footer>
  );
}
