import { useState } from 'react';
import { Send, Phone, MapPin, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WEBSITE_TYPES = [
  { value: 'business', label: 'موقع تجاري' },
  { value: 'personal', label: 'موقع شخصي' },
  { value: 'ecommerce', label: 'متجر إلكتروني' },
  { value: 'blog', label: 'مدونة' },
  { value: 'other', label: 'أخرى' },
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [websiteType, setWebsiteType] = useState('business');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel = WEBSITE_TYPES.find(t => t.value === websiteType)?.label || websiteType;
    const text = `مرحباً Zodex! أنا ${name} من ${country}. أبحث عن ${typeLabel}. ${message}`;
    const url = `https://wa.me/201044960460?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass = `
    w-full px-4 py-3 rounded-lg text-sm outline-none
    transition-all duration-300 border-b-2 focus:border-2
    border-[#494454] bg-transparent text-[#e3e1e9] focus:border-[#d0bcff] focus:bg-[#1e1f25]/40
  `;

  const contactItems = [
    { icon: Mail, label: 'البريد الإلكتروني', value: 'teamzodex1@gmail.com', href: 'mailto:teamzodex1@gmail.com' },
    { icon: Phone, label: 'الهاتف', value: '01044960460', href: 'tel:+201044960460' },
    { icon: MapPin, label: 'الموقع', value: 'قنا، مصر' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative" dir="rtl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-[150px] opacity-8 bg-[#4cd7f6]" />
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
            تواصل معنا
          </span>
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-[#e3e1e9]">
            دعنا نبدأ مشروعك
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-[#cbc3d7]">
            نحن هنا لتحويل أفكارك إلى واقع رقمي. تواصل معنا اليوم.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 2 }}
                className="flex items-center gap-4 p-4 rounded-xl border bg-[#1e1f25]/40 border-white/[0.06]"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#d0bcff]/10 text-[#d0bcff]">
                  <item.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-medium mb-0.5 text-[#958ea0]">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold transition-colors text-[#e3e1e9] hover:text-[#d0bcff]">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-[#e3e1e9]">{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 md:p-8 rounded-2xl border bg-[#1e1f25]/40 border-white/[0.06]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium mb-2 text-[#cbc3d7]">الاسم</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="اسمك الكريم"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2 text-[#cbc3d7]">الدولة</label>
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={inputClass}
                  placeholder="مصر"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium mb-2 text-[#cbc3d7]">نوع الموقع</label>
              <select
                required
                value={websiteType}
                onChange={(e) => setWebsiteType(e.target.value)}
                className={`${inputClass} appearance-none`}
              >
                {WEBSITE_TYPES.map((type) => (
                  <option key={type.value} value={type.value} className="bg-[#0F111A] text-[#e3e1e9]">
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium mb-2 text-[#cbc3d7]">تفاصيل المشروع</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder="اخبرنا عن مشروعك..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={sent}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                sent
                  ? 'bg-[#03b5d3] text-white'
                  : 'bg-[#d0bcff] text-[#23005c] hover:bg-[#e9ddff]'
              }`}
            >
              {sent ? (
                <>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                    <CheckCircle className="w-4 h-4" />
                  </motion.div>
                  تم الإرسال عبر واتساب
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  إرسال عبر واتساب
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
