import { useState } from 'react';
import { useThemeContext } from '@components/ThemeProvider';
import { Hexagon, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from '@data/initialData';

interface LoginPageProps {
  onLogin: (email: string, name: string) => void;
  onNavigate: (path: string) => void;
}

export default function LoginPage({ onLogin, onNavigate }: LoginPageProps) {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('البريد الإلكتروني مطلوب');
      return;
    }
    if (!password.trim()) {
      setError('كلمة المرور مطلوبة');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        onLogin(email, 'عز الدين السادات');
        onNavigate('/admin/dashboard');
      } else {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" dir="rtl">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 ${isDark ? 'bg-[#6d3bd7]' : 'bg-[#d0bcff]'}`} />
      </div>

      <div className={`relative w-full max-w-md rounded-2xl border p-8 md:p-10 ${isDark ? 'bg-[#1a1b21]/80 border-white/[0.08] backdrop-blur-xl' : 'bg-white/80 border-black/[0.08] backdrop-blur-xl'}`}>
        {/* Logo */}
        <div className="text-center mb-8">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${isDark ? 'bg-[#d0bcff]/10' : 'bg-[#6d3bd7]/10'}`}>
            <Hexagon className={`w-7 h-7 ${isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}`} strokeWidth={1.5} />
          </div>
          <h1 className={`font-syne font-bold text-2xl mb-1 ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>بوابة الإدارة</h1>
          <p className={`text-sm ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>تسجيل الدخول إلى لوحة التحكم</p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg mb-5 bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-300 ${isDark ? 'border-[#494454] bg-[#121318] text-[#e3e1e9] focus:border-[#d0bcff]' : 'border-[#cbc3d7] bg-[#faf9f7] text-[#1a1b21] focus:border-[#6d3bd7]'}`}
              placeholder="admin@zodex.com"
            />
          </div>

          <div>
            <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>كلمة المرور</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-300 pr-10 ${isDark ? 'border-[#494454] bg-[#121318] text-[#e3e1e9] focus:border-[#d0bcff]' : 'border-[#cbc3d7] bg-[#faf9f7] text-[#1a1b21] focus:border-[#6d3bd7]'}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-[#958ea0] hover:text-[#e3e1e9]' : 'text-[#6b6575] hover:text-[#1a1b21]'}`}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${isDark ? 'bg-[#d0bcff] text-[#23005c] hover:bg-[#e9ddff]' : 'bg-[#6d3bd7] text-white hover:bg-[#5516be]'} disabled:opacity-60`}
          >
            {isSubmitting ? 'جاري التحقق...' : 'تسجيل الدخول'}
          </button>
        </form>

        <div className={`mt-6 text-center text-xs ${isDark ? 'text-[#958ea0]/60' : 'text-[#6b6575]/60'}`}>
          البيانات الافتراضية: admin@zodex.com / Zodex2026!
        </div>
      </div>
    </div>
  );
}
