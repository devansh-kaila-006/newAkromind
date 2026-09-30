import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

interface FaqAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export default function FaqAccordion({ 
  items, 
  title, 
  subtitle,
  showSearch = true 
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories if present
  const categories = useMemo(() => {
    const cats = new Set<string>();
    items.forEach(item => {
      if (item.category) cats.add(item.category);
    });
    return cats.size > 1 ? ['All', ...Array.from(cats)] : [];
  }, [items]);

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  const toggleIndex = (idx: number) => {
    setOpenIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenIndices(filteredItems.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto font-sans">
      {/* Optional Title Block */}
      {(title || subtitle) && (
        <div className="text-center space-y-2 mb-8">
          {subtitle && (
            <span className="text-[10px] font-bold tracking-widest text-[#7D7067] uppercase">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-3xl font-serif italic text-warm-charcoal">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Control Bar: Search & Expand/Collapse */}
      {showSearch && (
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-[#FCFAF7] border border-[#E5E0D5] p-3 rounded-sm">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, questions, policies..."
              className="w-full pl-9 pr-4 py-2 bg-warm-cream/60 border border-[#E5E0D5] rounded-xs text-xs text-warm-charcoal placeholder-stone-400 focus:outline-none focus:border-terracotta font-sans transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 justify-end text-[11px] font-mono shrink-0">
            <button
              onClick={expandAll}
              className="px-2.5 py-1.5 hover:bg-warm-beige/50 text-stone-600 hover:text-warm-charcoal transition-colors border border-transparent hover:border-[#E5E0D5] rounded-xs cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-stone-300">/</span>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1.5 hover:bg-warm-beige/50 text-stone-600 hover:text-warm-charcoal transition-colors border border-transparent hover:border-[#E5E0D5] rounded-xs cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      )}

      {/* Category Tabs if present */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1 border-b border-[#E5E0D5] pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-warm-charcoal text-white'
                  : 'bg-[#FCFAF7] border border-[#E5E0D5] text-stone-600 hover:border-terracotta/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Item List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm space-y-2">
            <HelpCircle className="w-8 h-8 text-stone-300 mx-auto" />
            <h4 className="font-bold text-warm-charcoal text-sm">No matching questions found</h4>
            <p className="text-stone-500 text-xs font-serif italic">
              Try adjusting your search terms or view our general questions list.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs font-bold text-terracotta hover:underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredItems.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            const itemNumber = (idx + 1).toString().padStart(2, '0');

            return (
              <div 
                key={idx} 
                className="border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm overflow-hidden transition-all duration-200 hover:border-terracotta/40"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-warm-beige/30 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-4 pr-2">
                    <span className="font-mono text-xs font-bold text-terracotta shrink-0 pt-0.5">
                      {itemNumber}/
                    </span>
                    <div className="space-y-1">
                      <span className="font-serif text-base md:text-lg text-warm-charcoal font-medium group-hover:text-terracotta transition-colors leading-snug">
                        {item.q}
                      </span>
                      {item.category && (
                        <div className="text-[10px] uppercase font-bold tracking-widest text-stone-400 font-sans">
                          {item.category}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className={`w-7 h-7 flex items-center justify-center border border-[#E5E0D5] bg-warm-cream/50 rounded-xs text-warm-charcoal group-hover:border-terracotta/40 transition-colors shrink-0 text-xs font-mono mt-0.5`}>
                    {isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 text-terracotta" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-stone-600" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-[#E5E0D5]/60 bg-[#FAF7F2]/40">
                        <p className="text-stone-700 text-sm leading-relaxed font-sans pl-8 border-l-2 border-terracotta/30">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
