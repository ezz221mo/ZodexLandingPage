import { Monitor, Globe, Palette, Layers, Zap, MessageSquare } from 'lucide-react';
import { useThemeContext } from './ThemeProvider';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Globe,
  Palette,
  Layers,
  Zap,
  MessageSquare,
};

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  services: ServiceItem[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <section id="services" className="py-24 md:py-32" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`
              inline-block text-xs font-semibold tracking-wider mb-4
              ${isDark ? 'text-[#4cd7f6]' : 'text-[#004e5c]'}
            `}
          >
            خدماتنا
          </span>
          <h2
            className={`
              font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4
              ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
            `}
          >
            قدراتنا الأساسية
          </h2>
          <p
            className={`
              text-base md:text-lg max-w-xl mx-auto
              ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}
            `}
          >
            نقدم حلولاً تقنية متكاملة مصممة خصيصاً لتحقيق أهداف عملك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const IconComp = iconMap[service.icon] || Monitor;
            return (
              <div
                key={service.id}
                className={`
                  group relative p-6 md:p-8 rounded-xl border transition-all duration-500
                  hover:-translate-y-1
                  ${isDark
                    ? 'bg-[#1e1f25]/60 border-white/[0.06] hover:border-[#d0bcff]/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]'
                    : 'bg-white/60 border-black/[0.06] hover:border-[#6d3bd7]/20 hover:shadow-[0_0_30px_rgba(109,59,215,0.08)]'
                  }
                `}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Glow on hover */}
                <div
                  className={`
                    absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-0
                    group-hover:opacity-100 transition-opacity duration-500
                    ${isDark ? 'bg-[#d0bcff]/10' : 'bg-[#6d3bd7]/10'}
                  `}
                />

                <div className="relative z-10">
                  <div
                    className={`
                      w-12 h-12 rounded-lg flex items-center justify-center mb-5
                      ${isDark
                        ? 'bg-[#d0bcff]/10 text-[#d0bcff]'
                        : 'bg-[#6d3bd7]/10 text-[#6d3bd7]'
                      }
                    `}
                  >
                    <IconComp className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`
                      font-semibold text-lg mb-2
                      ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
                    `}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`
                      text-sm leading-relaxed
                      ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}
                    `}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
