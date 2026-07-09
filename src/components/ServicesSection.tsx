import { Building, ShoppingBag, Globe, Brain, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  Building, ShoppingBag, Globe, Brain, Monitor,
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 md:py-32 relative" dir="rtl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 bg-[#d0bcff]" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-wider mb-4 text-[#4cd7f6]">
            خدماتنا
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-[#e3e1e9]">
            حلول رقمية متكاملة
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-[#cbc3d7]">
            نقدم خدمات شاملة تناسب احتياجات شركتك ومشاريعك الرقمية
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {services.map((service) => {
            const IconComp = iconMap[service.icon] || Monitor;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-xl border transition-all duration-500 bg-[#1e1f25]/60 border-white/[0.06] hover:border-[#d0bcff]/25 hover:bg-[#1e1f25]/80"
              >
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[#d0bcff]/10" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-[#d0bcff]/10 text-[#d0bcff]"
                  >
                    <IconComp className="w-5 h-5" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-semibold text-base mb-2 text-[#e3e1e9]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#958ea0]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
