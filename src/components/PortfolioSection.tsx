import { useState } from 'react';
import { useThemeContext } from './ThemeProvider';
import { ExternalLink, Eye, Loader2, FolderOpen } from 'lucide-react';
import type { Project } from '@types/index';

interface PortfolioSectionProps {
  projects: Project[];
  isLoading: boolean;
}

export default function PortfolioSection({ projects, isLoading }: PortfolioSectionProps) {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  return (
    <section id="portfolio" className="py-24 md:py-32" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`
              inline-block text-xs font-semibold tracking-wider mb-4
              ${isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}
            `}
          >
            أعمالنا
          </span>
          <h2
            className={`
              font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4
              ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
            `}
          >
            محفظة أعمالنا
          </h2>
          <p
            className={`
              text-base md:text-lg max-w-xl mx-auto
              ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}
            `}
          >
            مجموعة من المشاريع التي تعكس جودة عملنا وإبداعنا
          </p>
        </div>

        {/* Skeleton Loader */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`
                  rounded-xl border overflow-hidden animate-pulse
                  ${isDark ? 'bg-[#1e1f25]/40 border-white/[0.06]' : 'bg-white/40 border-black/[0.06]'}
                `}
              >
                <div className={`h-48 ${isDark ? 'bg-white/[0.04]' : 'bg-black/[0.03]'}`} />
                <div className="p-5 space-y-3">
                  <div className={`h-5 w-2/3 rounded ${isDark ? 'bg-white/[0.04]' : 'bg-black/[0.03]'}`} />
                  <div className={`h-3 w-full rounded ${isDark ? 'bg-white/[0.04]' : 'bg-black/[0.03]'}`} />
                  <div className={`h-3 w-3/4 rounded ${isDark ? 'bg-white/[0.04]' : 'bg-black/[0.03]'}`} />
                  <div className="flex gap-2 pt-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className={`h-6 w-16 rounded-full ${isDark ? 'bg-white/[0.04]' : 'bg-black/[0.03]'}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && projects.length === 0 && (
          <div
            className={`
              text-center py-20 rounded-2xl border
              ${isDark ? 'bg-[#1e1f25]/30 border-white/[0.06]' : 'bg-white/30 border-black/[0.06]'}
            `}
          >
            <FolderOpen className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`} strokeWidth={1.5} />
            <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>
              لا توجد مشاريع حالياً
            </h3>
            <p className={`text-sm ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>
              سيتم إضافة المشاريع قريباً. تابعنا للمزيد!
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`
                  group rounded-xl border overflow-hidden transition-all duration-500
                  hover:-translate-y-1
                  ${isDark
                    ? 'bg-[#1e1f25]/60 border-white/[0.06] hover:border-[#d0bcff]/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]'
                    : 'bg-white/60 border-black/[0.06] hover:border-[#6d3bd7]/20 hover:shadow-[0_0_30px_rgba(109,59,215,0.08)]'
                  }
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  {!imageErrors.has(project.id) ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`
                        w-full h-full flex items-center justify-center
                        ${isDark ? 'bg-[#292a2f]' : 'bg-[#f0eeeb]'}
                      `}
                    >
                      <Eye className={`w-8 h-8 ${isDark ? 'text-[#494454]' : 'text-[#958ea0]'}`} strokeWidth={1.5} />
                    </div>
                  )}
                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex items-center justify-center gap-3
                      ${isDark ? 'bg-black/40' : 'bg-black/20'}
                    `}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        p-3 rounded-full backdrop-blur-sm transition-all duration-300
                        ${isDark
                          ? 'bg-[#1e1f25]/80 text-[#e3e1e9] hover:bg-[#d0bcff] hover:text-[#23005c]'
                          : 'bg-white/80 text-[#1a1b21] hover:bg-[#6d3bd7] hover:text-white'
                        }
                      `}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className={`
                      font-semibold text-lg mb-2
                      ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}
                    `}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`
                      text-sm leading-relaxed mb-4 line-clamp-2
                      ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}
                    `}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium border
                          ${isDark
                            ? 'border-[#03b5d3]/30 text-[#4cd7f6] bg-[#03b5d3]/5'
                            : 'border-[#004e5c]/20 text-[#004e5c] bg-[#4cd7f6]/5'
                          }
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
