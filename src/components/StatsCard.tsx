import { useThemeContext } from './ThemeProvider';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
}

export default function StatsCard({ label, value, icon: Icon }: StatsCardProps) {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <div className={`p-5 rounded-xl border transition-all duration-300 ${isDark ? 'bg-[#1e1f25]/60 border-white/[0.06]' : 'bg-white/60 border-black/[0.06]'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-[#d0bcff]/10 text-[#d0bcff]' : 'bg-[#6d3bd7]/10 text-[#6d3bd7]'}`}>
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <div>
          <div className={`font-syne font-bold text-2xl ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>{value}</div>
          <div className={`text-xs ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>{label}</div>
        </div>
      </div>
    </div>
  );
}
