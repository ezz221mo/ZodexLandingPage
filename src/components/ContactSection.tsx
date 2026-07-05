import { useState } from 'react';
import { useThemeContext } from './ThemeProvider';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className={`inline-block text-xs font-semibold tracking-wider mb-4 ${isDark ? 'text-[#4cd7f6]' : 'text-[#004e5c]'}`}>
            تواصل معنا
          </span>
          <h2 className={`font-syne font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>
            دعنا نبدأ مشروعك
          </h2>
          <p className={`text-base md:text-lg max-w-xl mx-auto ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>
            نحن هنا لتحويل أفكارك إلى واقع رقمي. تواصل معنا اليوم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: 'البريد الإلكتروني', value: 'hello@zodex.com' },
              { icon: Phone, label: 'الهاتف', value: '+20 123 456 7890' },
              { icon: MapPin, label: 'الموقع', value: 'القاهرة، مصر' },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 p-4 rounded-xl border ${isDark ? 'bg-[#1e1f25]/40 border-white/[0.06]' : 'bg-white/40 border-black/[0.06]'}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-[#d0bcff]/10 text-[#d0bcff]' : 'bg-[#6d3bd7]/10 text-[#6d3bd7]'}`}>
                  <item.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className={`text-xs font-medium mb-0.5 ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>{item.label}</div>
                  <div className={`text-sm font-semibold ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={`lg:col-span-3 p-6 md:p-8 rounded-2xl border ${isDark ? 'bg-[#1e1f25]/40 border-white/[0.06]' : 'bg-white/40 border-black/[0.06]'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>الاسم</label>
                <input
                  type="text"
                  required
                  className={`w-full px-4 py-3 rounded-lg text-sm border-b-2 bg-transparent outline-none transition-all duration-300 focus:border-[#d0bcff] focus:bg-[#1e1f25]/30 ${isDark ? 'border-[#494454] text-[#e3e1e9]' : 'border-[#cbc3d7] text-[#1a1b21]'}`}
                  placeholder="اسمك الكريم"
                />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>البريد الإلكتروني</label>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 rounded-lg text-sm border-b-2 bg-transparent outline-none transition-all duration-300 focus:border-[#d0bcff] focus:bg-[#1e1f25]/30 ${isDark ? 'border-[#494454] text-[#e3e1e9]' : 'border-[#cbc3d7] text-[#1a1b21]'}`}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>الرسالة</label>
              <textarea
                rows={4}
                required
                className={`w-full px-4 py-3 rounded-lg text-sm border-b-2 bg-transparent outline-none transition-all duration-300 focus:border-[#d0bcff] focus:bg-[#1e1f25]/30 resize-none ${isDark ? 'border-[#494454] text-[#e3e1e9]' : 'border-[#cbc3d7] text-[#1a1b21]'}`}
                placeholder="اخبرنا عن مشروعك..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${sent ? 'bg-[#03b5d3] text-white' : isDark ? 'bg-[#d0bcff] text-[#23005c] hover:bg-[#e9ddff]' : 'bg-[#6d3bd7] text-white hover:bg-[#5516be]'}`}
            >
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  تم الإرسال بنجاح
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  إرسال الرسالة
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
