import { useState } from 'react';
import { Menu, X, Sun, Moon, Hexagon } from 'lucide-react';
import { useThemeContext } from './ThemeProvider';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar({ onNavigate, currentPath }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  const isDark = theme === 'dark';

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate(href);
    }
  };

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      dir="rtl"
    >
      <div
        className={`
          flex items-center justify-between px-6 py-3 rounded-xl
          backdrop-blur-2xl border transition-all duration-500
          ${isDark
            ? 'bg-[#0F111A]/70 border-white/[0.08]'
            : 'bg-white/70 border-black/[0.06]'
          }
        `}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 group"
        >
          <Hexagon
            className={`
              w-8 h-8 transition-colors duration-300
              ${isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}
            `}
            strokeWidth={1.5}
          />
          <span
            className={`
              font-syne font-bold text-xl tracking-tight transition-colors duration-300
              ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
            `}
          >
            زودكس
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${isDark
                  ? 'text-[#cbc3d7] hover:text-[#e3e1e9] hover:bg-white/[0.06]'
                  : 'text-[#494454] hover:text-[#1a1b21] hover:bg-black/[0.04]'
                }
              `}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`
              p-2 rounded-lg transition-all duration-300
              ${isDark
                ? 'text-[#cbc3d7] hover:text-[#e3e1e9] hover:bg-white/[0.06]'
                : 'text-[#494454] hover:text-[#1a1b21] hover:bg-black/[0.04]'
              }
            `}
            aria-label="تبديل الوضع"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`
              md:hidden p-2 rounded-lg transition-all duration-300
              ${isDark
                ? 'text-[#cbc3d7] hover:text-[#e3e1e9] hover:bg-white/[0.06]'
                : 'text-[#494454] hover:text-[#1a1b21] hover:bg-black/[0.04]'
              }
            `}
            aria-label="القائمة"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`
            md:hidden mt-2 rounded-xl border backdrop-blur-2xl overflow-hidden
            animate-in slide-in-from-top-2 duration-300
            ${isDark
              ? 'bg-[#0F111A]/90 border-white/[0.08]'
              : 'bg-white/90 border-black/[0.06]'
            }
          `}
        >
          <div className="p-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`
                  px-4 py-3 rounded-lg text-right text-sm font-medium transition-all duration-300
                  ${isDark
                    ? 'text-[#cbc3d7] hover:text-[#e3e1e9] hover:bg-white/[0.06]'
                    : 'text-[#494454] hover:text-[#1a1b21] hover:bg-black/[0.04]'
                  }
                `}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
