import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '@typings/index';

interface PortfolioSectionProps {
  project: Project;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioSection({ project }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative" dir="rtl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-8 bg-[#d0bcff]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-[80px] opacity-6 bg-[#4cd7f6]" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-wider mb-4 text-[#d0bcff]">
            أعمالنا
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-[#e3e1e9]">
            مشروع مميز
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-[#cbc3d7]">
            نموذج من المشاريع التي تعكس جودة عملنا واحترافيتنا
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative rounded-2xl border border-white/[0.08] bg-[#1e1f25]/60 overflow-hidden shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:border-[#d0bcff]/25 transition-all duration-500"
          >
            <div className="relative aspect-video overflow-hidden">
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                loading="lazy"
              />
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-[#090A0F]/70 backdrop-blur-sm" />
                <motion.div
                  initial={{ scale: 0.8, y: 10 }}
                  whileHover={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#d0bcff] text-[#23005c] text-sm font-semibold shadow-xl shadow-black/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  عرض المشروع
                </motion.div>
              </motion.a>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="font-syne font-bold text-xl md:text-2xl mb-3 text-[#e3e1e9]">
                {project.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-6 text-[#cbc3d7]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-medium border border-[#d0bcff]/20 text-[#d0bcff] bg-[#d0bcff]/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
