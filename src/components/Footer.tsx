import { Hexagon, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useThemeContext } from './ThemeProvider';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <footer
      className={`
        border-t transition-colors duration-500
        ${isDark ? 'border-white/[0.06] bg-[#0d0e13]' : 'border-black/[0.06] bg-[#faf9f7]'}
      `}
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Hexagon
                className={`w-7 h-7 ${isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}`}
                strokeWidth={1.5}
              />
              <span className={`font-syne font-bold text-lg ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>
                زودكس
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>
              نصنع منتجات رقمية استثنائية تجمع بين الجمال والأداء. نؤمن بأن كل تفصيلة مهمة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`font-semibold text-sm ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>
              روابط سريعة
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'الرئيسية', href: '/' },
                { label: 'من نحن', href: '#about' },
                { label: 'خدماتنا', href: '#services' },
                { label: 'أعمالنا', href: '#portfolio' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.href.startsWith('#')) {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onNavigate(link.href);
                    }
                  }}
                  className={`
                    text-sm flex items-center gap-1 transition-colors duration-300 group
                    ${isDark ? 'text-[#958ea0] hover:text-[#d0bcff]' : 'text-[#6b6575] hover:text-[#6d3bd7]'}
                  `}
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className={`font-semibold text-sm ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>
              تواصل معنا
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@zodex.com"
                className={`
                  text-sm flex items-center gap-2 transition-colors duration-300
                  ${isDark ? 'text-[#958ea0] hover:text-[#d0bcff]' : 'text-[#6b6575] hover:text-[#6d3bd7]'}
                `}
              >
                <Mail className="w-4 h-4" />
                hello@zodex.com
              </a>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="#"
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${isDark
                      ? 'bg-white/[0.04] text-[#958ea0] hover:text-[#d0bcff] hover:bg-white/[0.08]'
                      : 'bg-black/[0.03] text-[#6b6575] hover:text-[#6d3bd7] hover:bg-black/[0.06]'
                    }
                  `}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className={`
                    p-2 rounded-lg transition-all duration-300
                    ${isDark
                      ? 'bg-white/[0.04] text-[#958ea0] hover:text-[#d0bcff] hover:bg-white/[0.08]'
                      : 'bg-black/[0.03] text-[#6b6575] hover:text-[#6d3bd7] hover:bg-black/[0.06]'
                    }
                  `}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`
            mt-12 pt-8 border-t text-center text-xs
            ${isDark ? 'border-white/[0.06] text-[#958ea0]/60' : 'border-black/[0.06] text-[#6b6575]/60'}
          `}
        >
          © 2026 زودكس — Zodex. جميع الحقوق محفوظة. تأسست بواسطة عز الدين السادات.
        </div>
      </div>
    </footer>
  );
}
