"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  open,
  onClose,
  children,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998]' bg-black/80 backdrop-blur-md"
          />

          {/* Modal Wrapper */}

          <div className="fixed inset-0 z-[9999]' flex items-center justify-center overflow-y-auto p-6">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 60,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              {/* Background Glow */}

              <div className="absolute inset-0 rounded-[32px]' bg-gradient-to-r' from-blue-500/20 via-cyan-500/20 to-indigo-500/20 blur-3xl" />

              {/* Card */}

              <div className="relative overflow-hidden rounded-[32px]' border border-white/10 bg-[#07111f]/95 shadow-2xl backdrop-blur-3xl">

                {/* Decorative Blur */}

                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

                {/* Close Button */}

                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 z-50 rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:rotate-90 hover:bg-blue-500"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Content */}

                <div className="max-h-[90vh] overflow-y-auto p-10">
                  {children}
                </div>

              </div>

            </motion.div>

          </div>
        </>
      )}
    </AnimatePresence>
  );
}