import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center font-mono"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-muted-foreground mb-4"
            >
              <span className="text-[var(--neon-cyan)]">$</span> initializing portfolio
              <span className="animate-blink">_</span>
            </motion.div>
            <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4 }}
                className="h-full bg-gradient-neon"
              />
            </div>
            <div className="mt-4 text-2xl font-bold text-gradient">RAHUL.SINGH</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
