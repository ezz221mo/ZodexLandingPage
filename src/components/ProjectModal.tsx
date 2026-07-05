import { useState, useEffect } from 'react';
import { useThemeContext } from './ThemeProvider';
import { X, Plus, Tag } from 'lucide-react';
import type { Project } from '@types/index';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  onUpdate?: (id: string, updates: Partial<Project>) => void;
  editingProject?: Project | null;
}

const emptyForm = {
  title: '',
  description: '',
  imageUrl: '',
  techTags: [] as string[],
  liveLink: '',
};

export default function ProjectModal({ isOpen, onClose, onSubmit, onUpdate, editingProject }: ProjectModalProps) {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [form, setForm] = useState(emptyForm);
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (editingProject) {
      setForm({
        title: editingProject.title,
        description: editingProject.description,
        imageUrl: editingProject.imageUrl,
        techTags: [...editingProject.techTags],
        liveLink: editingProject.liveLink,
      });
    } else {
      setForm(emptyForm);
    }
    setErrors({});
    setTagInput('');
  }, [editingProject, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.title.trim()) errs.title = 'عنوان المشروع مطلوب';
    if (!form.description.trim()) errs.description = 'وصف المشروع مطلوب';
    if (!form.imageUrl.trim()) errs.imageUrl = 'رابط الصورة مطلوب';
    if (form.techTags.length === 0) errs.techTags = 'أضف تقنية واحدة على الأقل';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (editingProject && onUpdate) {
      onUpdate(editingProject.id, form);
    } else {
      onSubmit(form);
    }
    onClose();
  };

  const addTag = () => {
    if (tagInput.trim() && !form.techTags.includes(tagInput.trim())) {
      setForm((prev) => ({ ...prev, techTags: [...prev.techTags, tagInput.trim()] }));
      setTagInput('');
      setErrors((prev) => ({ ...prev, techTags: '' }));
    }
  };

  const removeTag = (tag: string) => {
    setForm((prev) => ({ ...prev, techTags: prev.techTags.filter((t) => t !== tag) }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" dir="rtl">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-lg rounded-2xl border p-6 md:p-8 max-h-[90vh] overflow-y-auto ${isDark ? 'bg-[#1a1b21] border-white/[0.08]' : 'bg-white border-black/[0.08]'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`font-syne font-bold text-xl ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>
            {editingProject ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
          </h3>
          <button onClick={onClose} className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-[#958ea0] hover:text-[#e3e1e9] hover:bg-white/[0.06]' : 'text-[#6b6575] hover:text-[#1a1b21] hover:bg-black/[0.04]'}`}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>عنوان المشروع</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-300 ${errors.title ? 'border-red-400' : isDark ? 'border-[#494454] bg-[#121318] text-[#e3e1e9] focus:border-[#d0bcff]' : 'border-[#cbc3d7] bg-[#faf9f7] text-[#1a1b21] focus:border-[#6d3bd7]'}`}
              placeholder="مثال: منصة التجارة الإلكترونية"
            />
            {errors.title && <span className="text-red-400 text-xs mt-1">{errors.title}</span>}
          </div>

          <div>
            <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>الوصف</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-300 resize-none ${errors.description ? 'border-red-400' : isDark ? 'border-[#494454] bg-[#121318] text-[#e3e1e9] focus:border-[#d0bcff]' : 'border-[#cbc3d7] bg-[#faf9f7] text-[#1a1b21] focus:border-[#6d3bd7]'}`}
              placeholder="وصف مختصر للمشروع..."
            />
            {errors.description && <span className="text-red-400 text-xs mt-1">{errors.description}</span>}
          </div>

          <div>
            <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>رابط الصورة</label>
            <input
              type="url"
              value={form.imageUrl}
              onChange={(e) => setForm((p) => ({ ...p, imageUrl: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-300 ${errors.imageUrl ? 'border-red-400' : isDark ? 'border-[#494454] bg-[#121318] text-[#e3e1e9] focus:border-[#d0bcff]' : 'border-[#cbc3d7] bg-[#faf9f7] text-[#1a1b21] focus:border-[#6d3bd7]'}`}
              placeholder="https://example.com/image.jpg"
            />
            {errors.imageUrl && <span className="text-red-400 text-xs mt-1">{errors.imageUrl}</span>}
          </div>

          <div>
            <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>رابط المشروع المباشر</label>
            <input
              type="url"
              value={form.liveLink}
              onChange={(e) => setForm((p) => ({ ...p, liveLink: e.target.value }))}
              className={`w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-300 ${isDark ? 'border-[#494454] bg-[#121318] text-[#e3e1e9] focus:border-[#d0bcff]' : 'border-[#cbc3d7] bg-[#faf9f7] text-[#1a1b21] focus:border-[#6d3bd7]'}`}
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-[#cbc3d7]' : 'text-[#494454]'}`}>التقنيات المستخدمة</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className={`flex-1 px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-300 ${isDark ? 'border-[#494454] bg-[#121318] text-[#e3e1e9] focus:border-[#d0bcff]' : 'border-[#cbc3d7] bg-[#faf9f7] text-[#1a1b21] focus:border-[#6d3bd7]'}`}
                placeholder="React, TypeScript, ..."
              />
              <button
                type="button"
                onClick={addTag}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${isDark ? 'border-[#494454] text-[#d0bcff] hover:bg-white/[0.06]' : 'border-[#cbc3d7] text-[#6d3bd7] hover:bg-black/[0.04]'}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {errors.techTags && <span className="text-red-400 text-xs mb-2 block">{errors.techTags}</span>}
            <div className="flex flex-wrap gap-2">
              {form.techTags.map((tag) => (
                <span key={tag} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border ${isDark ? 'border-[#03b5d3]/30 text-[#4cd7f6] bg-[#03b5d3]/5' : 'border-[#004e5c]/20 text-[#004e5c] bg-[#4cd7f6]/5'}`}>
                  <Tag className="w-3 h-3" />
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)} className="mr-1 hover:text-red-400 transition-colors">×</button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all duration-300 ${isDark ? 'border-[#494454] text-[#cbc3d7] hover:bg-white/[0.06]' : 'border-[#cbc3d7] text-[#494454] hover:bg-black/[0.04]'}`}
            >
              إلغاء
            </button>
            <button
              type="submit"
              className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${isDark ? 'bg-[#d0bcff] text-[#23005c] hover:bg-[#e9ddff]' : 'bg-[#6d3bd7] text-white hover:bg-[#5516be]'}`}
            >
              {editingProject ? 'حفظ التعديلات' : 'إضافة المشروع'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
