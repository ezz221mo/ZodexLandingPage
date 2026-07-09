import { Linkedin, Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/team-zodex-a4356341b/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/teamzodex1/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/Ezz.Zodex?locale=ar_AR', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0d0e13]">
      <div className="max-w-6xl mx-auto px-6 py-16" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#d0bcff]/10 flex items-center justify-center">
                <span className="font-syne font-bold text-sm text-[#d0bcff]">Z</span>
              </div>
              <span className="font-syne font-bold text-lg text-[#e3e1e9]">Zodex</span>
            </div>
            <p className="text-sm leading-relaxed text-[#958ea0]">
              نصنع منتجات رقمية استثنائية تجمع بين الجمال والأداء. نؤمن بأن كل تفصيلة مهمة.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-sm text-[#e3e1e9]">روابط سريعة</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.label}
                  whileHover={{ x: -2 }}
                  onClick={() => {
                    if (link.href.startsWith('#')) {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-sm flex items-center gap-1 transition-colors duration-300 group text-[#958ea0] hover:text-[#d0bcff]"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-sm text-[#e3e1e9]">تواصل معنا</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:teamzodex1@gmail.com"
                className="text-sm flex items-center gap-2 transition-colors duration-300 text-[#958ea0] hover:text-[#d0bcff]"
              >
                <Mail className="w-4 h-4" />
                teamzodex1@gmail.com
              </a>
              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-300 bg-white/[0.04] text-[#958ea0] hover:text-[#d0bcff] hover:bg-white/[0.08]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/[0.06] text-center text-xs text-[#958ea0]/60"
        >
          &copy; 2026 Zodex. جميع الحقوق محفوظة. تأسست بواسطة عز الدين السادات.
        </motion.div>
      </div>
    </footer>
  );
}
