import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex items-center justify-between px-6 py-3 rounded-xl glass bg-[#0F111A]/70 border border-white/[0.08]"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#d0bcff]/10 flex items-center justify-center">
            <span className="font-syne font-bold text-lg text-[#d0bcff]">Z</span>
          </div>
          <span className="font-syne font-bold text-xl text-[#e3e1e9]">
            Zodex
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[#cbc3d7] hover:text-[#e3e1e9] hover:bg-white/[0.06]"
            >
              {link.label}
            </motion.button>
          ))}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/Ezzaldin_Elsadat_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 bg-[#d0bcff]/10 text-[#d0bcff] hover:bg-[#d0bcff]/20 mr-2"
          >
            <Download className="w-3.5 h-3.5" strokeWidth={2} />
            السيرة الذاتية
          </motion.a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-[#cbc3d7] hover:text-[#e3e1e9] hover:bg-white/[0.06]"
          aria-label="القائمة"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 rounded-xl border glass bg-[#0F111A]/90 border-white/[0.08] overflow-hidden"
          >
            <div className="p-2 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 rounded-lg text-right text-sm font-medium text-[#cbc3d7] hover:text-[#e3e1e9] hover:bg-white/[0.06]"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="/Ezzaldin_Elsadat_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-3 rounded-lg text-right text-sm font-semibold transition-all duration-300 bg-[#d0bcff]/10 text-[#d0bcff] hover:bg-[#d0bcff]/20"
              >
                <Download className="w-3.5 h-3.5" strokeWidth={2} />
                السيرة الذاتية
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
