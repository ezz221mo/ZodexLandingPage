import { useThemeContext } from './ThemeProvider';
import { Code2, Globe, Server, Award, BookOpen, Coffee } from 'lucide-react';

export default function FounderSection() {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const skills = [
    { icon: Code2, label: 'Frontend Development', desc: 'React, TypeScript, Tailwind CSS' },
    { icon: Globe, label: 'WordPress', desc: 'Custom Themes & Plugins' },
    { icon: Server, label: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js' },
  ];

  const stats = [
    { icon: Award, value: '+5', label: 'سنوات خبرة' },
    { icon: BookOpen, value: '+30', label: 'مشروع منجز' },
    { icon: Coffee, value: '+2000', label: 'كوب قهوة ☕' },
  ];

  return (
    <section id="about" className="py-24 md:py-32" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`
              inline-block text-xs font-semibold tracking-wider mb-4
              ${isDark ? 'text-[#ffb869]' : 'text-[#673d00]'}
            `}
          >
            من نحن
          </span>
          <h2
            className={`
              font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4
              ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
            `}
          >
            المؤسس والقائد
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div
            className={`
              relative p-8 md:p-10 rounded-2xl border backdrop-blur-sm
              ${isDark
                ? 'bg-[#1e1f25]/60 border-white/[0.06]'
                : 'bg-white/60 border-black/[0.06]'
              }
            `}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div
                className={`
                  w-24 h-24 rounded-full flex items-center justify-center text-3xl font-syne font-bold
                  ${isDark
                    ? 'bg-[#d0bcff]/10 text-[#d0bcff] border-2 border-[#d0bcff]/20'
                    : 'bg-[#6d3bd7]/10 text-[#6d3bd7] border-2 border-[#6d3bd7]/20'
                  }
                `}
              >
                ع.س
              </div>
              <div className="text-center sm:text-right">
                <h3
                  className={`
                    font-syne font-bold text-2xl mb-1
                    ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
                  `}
                >
                  عز الدين السادات
                </h3>
                <p
                  className={`
                    text-sm font-medium
                    ${isDark ? 'text-[#4cd7f6]' : 'text-[#004e5c]'}
                  `}
                >
                  مؤسس ومهندس برمجيات
                </p>
                <p
                  className={`
                    text-sm mt-2 leading-relaxed
                    ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}
                  `}
                >
                  شغوف ببناء منتجات رقمية تترك أثراً. أؤمن بأن التفاصيل الصغيرة تصنع الفرق الكبير.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-8 space-y-3">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg
                    ${isDark ? 'bg-white/[0.03]' : 'bg-black/[0.02]'}
                  `}
                >
                  <skill.icon
                    className={`w-4 h-4 ${isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}`}
                    strokeWidth={1.5}
                  />
                  <div>
                    <span
                      className={`
                        text-sm font-medium block
                        ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
                      `}
                    >
                      {skill.label}
                    </span>
                    <span
                      className={`
                        text-xs
                        ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}
                      `}
                    >
                      {skill.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`
                  p-6 rounded-xl border text-center lg:text-right transition-all duration-300
                  hover:-translate-y-0.5
                  ${isDark
                    ? 'bg-[#1e1f25]/40 border-white/[0.06] hover:border-[#d0bcff]/15'
                    : 'bg-white/40 border-black/[0.06] hover:border-[#6d3bd7]/15'
                  }
                `}
              >
                <stat.icon
                  className={`w-6 h-6 mb-3 mx-auto lg:mx-0 ${isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}`}
                  strokeWidth={1.5}
                />
                <div
                  className={`
                    font-syne font-bold text-3xl mb-1
                    ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
                  `}
                >
                  {stat.value}
                </div>
                <div
                  className={`
                    text-sm
                    ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}
                  `}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
