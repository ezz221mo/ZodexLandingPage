import { useThemeContext } from './ThemeProvider';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      dir="rtl"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`
            absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20
            ${isDark ? 'bg-[#6d3bd7]' : 'bg-[#d0bcff]'}
          `}
        />
        <div
          className={`
            absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15
            ${isDark ? 'bg-[#03b5d3]' : 'bg-[#4cd7f6]'}
          `}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8
            border backdrop-blur-sm
            ${isDark
              ? 'border-[#d0bcff]/20 text-[#d0bcff] bg-[#d0bcff]/5'
              : 'border-[#6d3bd7]/20 text-[#6d3bd7] bg-[#6d3bd7]/5'
            }
          `}
        >
          <Sparkles className="w-3.5 h-3.5" />
          شركة برمجيات متميزة
        </div>

        {/* Main Headline */}
        <h1
          className={`
            font-syne font-extrabold leading-[1.1] tracking-tight mb-6
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
          `}
        >
          نصنع منتجات رقمية
          <br />
          <span className={isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}>
            تقود مستقبلك
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`
            text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10
            ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}
          `}
        >
          زودكس — شركة برمجيات متخصصة في تطوير الواجهات الأمامية، ووردبريس، وحلول MERN.
          بقيادة المهندس <strong className={isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}>عز الدين السادات</strong>،
          نبني تجارب رقمية تترك أثراً.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              const el = document.querySelector('#portfolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`
              px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300
              ${isDark
                ? 'bg-[#d0bcff] text-[#23005c] hover:bg-[#e9ddff] hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]'
                : 'bg-[#6d3bd7] text-white hover:bg-[#5516be] hover:shadow-[0_0_40px_rgba(109,59,215,0.25)]'
              }
            `}
          >
            استكشف أعمالنا
          </button>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`
              px-8 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300
              ${isDark
                ? 'border-white/10 text-[#e3e1e9] hover:bg-white/[0.06] hover:border-white/20'
                : 'border-black/10 text-[#1a1b21] hover:bg-black/[0.04] hover:border-black/20'
              }
            `}
          >
            تواصل معنا
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <ArrowDown
            className={`w-5 h-5 mx-auto ${isDark ? 'text-[#958ea0]' : 'text-[#958ea0]'}`}
          />
        </div>
      </div>
    </section>
  );
}
