import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FaqAccordion({ items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div 
            key={idx} 
            className="border border-gray-100 rounded-2xl bg-white shadow-xs overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full text-left p-6 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50/50 transition cursor-pointer"
            >
              <span className="pr-4">{item.q}</span>
              <span className={`transform transition-transform duration-200 text-indigo-600 font-mono text-xl select-none`}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50/50 bg-gray-50/30">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
