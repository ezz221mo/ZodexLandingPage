import { ArrowDown, Sparkles, Hexagon, Star, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
      dir="rtl"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] bg-[#6d3bd7]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-[#03b5d3]"
        />
      </div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] opacity-20 hidden lg:block"
      >
        <Hexagon className="w-8 h-8 text-[#d0bcff]" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-48 left-[10%] opacity-15 hidden lg:block"
      >
        <Star className="w-6 h-6 text-[#4cd7f6]" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-40 left-[20%] opacity-10 hidden lg:block"
      >
        <Hexagon className="w-12 h-12 text-[#ffb869]" strokeWidth={1} />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={scaleIn}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border glass border-[#d0bcff]/20 text-[#d0bcff] bg-[#d0bcff]/5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          شركة برمجيات متميزة
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-syne font-extrabold leading-[1.3] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#e3e1e9]"
        >
          نصنع منتجات رقمية
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-[#d0bcff] to-[#a078ff]">
            تقود مستقبلك
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-[#cbc3d7]"
        >
          Zodex — شركة برمجيات متخصصة في تطوير واجهات المستخدم ومواقع WordPress الاحترافية.
          بقيادة المهندس <strong className="text-[#e3e1e9]">عز الدين السادات</strong>،
          نبني تجارب رقمية تترك أثراً.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(139,92,246,0.25)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector('#portfolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-[#d0bcff] text-[#23005c] hover:bg-[#e9ddff]"
          >
            استكشف أعمالنا
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 border-white/10 text-[#e3e1e9] hover:bg-white/[0.06] hover:border-white/20"
          >
            تواصل معنا
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/Ezzaldin_Elsadat_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 border-[#d0bcff]/30 text-[#d0bcff] hover:bg-[#d0bcff]/10"
          >
            <Download className="w-3.5 h-3.5" strokeWidth={2} />
            السيرة الذاتية
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-20"
        >
          <ArrowDown className="w-5 h-5 mx-auto text-[#958ea0]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
