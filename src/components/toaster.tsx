'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useToastState, Toast } from "../hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToastState();

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-[100] space-y-3">
      <AnimatePresence>
        {toasts.map((toast: Toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`
              glass-morphism max-w-sm p-4 rounded-lg shadow-lg border-l-4
              ${toast.variant === 'destructive'
                ? 'border-red-500 bg-red-950/20'
                : 'border-[var(--cosmic-ethereal)] bg-[var(--cosmic-ethereal)]/10'
              }
            `}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className={`
                  font-medium text-sm
                  ${toast.variant === 'destructive' ? 'text-[var(--cosmic-ethereal)]' : 'text-[var(--primary)]'}
                `}>
                  {toast.title}
                </h4>
                {toast.description && (
                  <p className="text-white/70 text-xs mt-1 leading-relaxed">
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => dismiss(toast.id)}
                className="ml-3 text-xs hover:opacity-70 transition-opacity text-white"
              >
                ✕
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}