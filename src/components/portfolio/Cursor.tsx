import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-[var(--neon-cyan)] pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ x: pos.x - 12, y: pos.y - 12, scale: hover ? 1.8 : 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--neon-cyan)] pointer-events-none z-[100] hidden md:block"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", damping: 30, stiffness: 800 }}
      />
    </>
  );
}