import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/looplic-logo.webp";

/**
 * Global brand loader.
 * - Shows briefly on every route navigation
 * - Shows when any element dispatches `window.dispatchEvent(new Event("app:loading"))`
 *   and hides on `app:loading-done` (or after a max timeout)
 * - Auto-shows on any <a>, <button>, or [data-loader] click for snappy feedback
 */
const PageLoader = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Route change loader
  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 650);
    return () => clearTimeout(t);
  }, [pathname]);

  // Custom event loader
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const onStart = () => {
      setVisible(true);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 4000);
    };
    const onDone = () => {
      if (timeout) clearTimeout(timeout);
      setVisible(false);
    };
    window.addEventListener("app:loading", onStart);
    window.addEventListener("app:loading-done", onDone);
    return () => {
      window.removeEventListener("app:loading", onStart);
      window.removeEventListener("app:loading-done", onDone);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  // Auto trigger on link / submit clicks for instant feedback
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (anchor && anchor.getAttribute("href") && !anchor.target && !anchor.hasAttribute("download")) {
        const href = anchor.getAttribute("href") || "";
        if (href.startsWith("/") && !href.startsWith("//")) {
          setVisible(true);
          setTimeout(() => setVisible(false), 700);
        }
      }
      const submitter = target.closest('button[type="submit"], [data-loader="true"]');
      if (submitter) {
        setVisible(true);
        setTimeout(() => setVisible(false), 700);
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/85 backdrop-blur-sm pointer-events-none"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="relative flex flex-col items-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              {/* Outer ring */}
              <span className="absolute inset-0 rounded-full border-2 border-border" />
              {/* Spinning accent arc */}
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{ borderTopColor: "hsl(var(--accent))", borderRightColor: "hsl(var(--accent))" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* Logo center */}
              <motion.div
                className="absolute inset-3 rounded-full bg-card flex items-center justify-center overflow-hidden shadow-lg"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={logo} alt="Loading" className="w-9 h-9 sm:w-11 sm:h-11 object-contain" />
              </motion.div>
            </div>
            <motion.p
              className="mt-4 text-xs sm:text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
