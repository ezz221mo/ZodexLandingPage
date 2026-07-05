import { useState } from 'react';
import { useThemeContext } from '@components/ThemeProvider';
import StatsCard from '@components/StatsCard';
import ProjectModal from '@components/ProjectModal';
import { Hexagon, LayoutDashboard, FolderOpen, LogOut, Plus, Pencil, Trash2, ExternalLink, Users, Layers, TrendingUp } from 'lucide-react';
import type { Project } from '@types/index';

interface DashboardPageProps {
  projects: Project[];
  onLogout: () => void;
  onNavigate: (path: string) => void;
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
}

export default function DashboardPage({ projects, onLogout, onNavigate, addProject, updateProject, deleteProject }: DashboardPageProps) {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setEditingProject(null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingProject(null);
  };

  const stats = [
    { label: 'إجمالي المشاريع', value: projects.length, icon: FolderOpen },
    { label: 'التقنيات', value: new Set(projects.flatMap((p) => p.techTags)).size, icon: Layers },
    { label: 'المشاريع النشطة', value: projects.filter((p) => p.liveLink && p.liveLink !== '#').length, icon: TrendingUp },
    { label: 'الزوار', value: '1.2K', icon: Users },
  ];

  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 right-0 z-40 w-64 border-l transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} ${isDark ? 'bg-[#1a1b21] border-white/[0.06]' : 'bg-white border-black/[0.06]'}`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <Hexagon className={`w-7 h-7 ${isDark ? 'text-[#d0bcff]' : 'text-[#6d3bd7]'}`} strokeWidth={1.5} />
            <span className={`font-syne font-bold text-lg ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>زودكس</span>
          </div>

          <nav className="space-y-1">
            <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isDark ? 'bg-[#d0bcff]/10 text-[#d0bcff]' : 'bg-[#6d3bd7]/10 text-[#6d3bd7]'}`}>
              <LayoutDashboard className="w-4 h-4" />
              لوحة التحكم
            </button>
            <button
              onClick={handleAdd}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isDark ? 'text-[#cbc3d7] hover:bg-white/[0.06] hover:text-[#e3e1e9]' : 'text-[#494454] hover:bg-black/[0.04] hover:text-[#1a1b21]'}`}
            >
              <Plus className="w-4 h-4" />
              إضافة مشروع
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/[0.06]">
          <button
            onClick={() => { onLogout(); onNavigate('/'); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isDark ? 'text-red-400 hover:bg-red-500/10' : 'text-red-500 hover:bg-red-500/5'}`}
          >
            <LogOut className="w-4 h-4" />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className={`sticky top-0 z-20 px-6 py-4 border-b backdrop-blur-xl ${isDark ? 'bg-[#121318]/80 border-white/[0.06]' : 'bg-white/80 border-black/[0.06]'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg">
                <LayoutDashboard className={`w-5 h-5 ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`} />
              </button>
              <h1 className={`font-syne font-bold text-xl ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>لوحة التحكم</h1>
            </div>
            <button
              onClick={handleAdd}
              className={`hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${isDark ? 'bg-[#d0bcff] text-[#23005c] hover:bg-[#e9ddff]' : 'bg-[#6d3bd7] text-white hover:bg-[#5516be]'}`}
            >
              <Plus className="w-4 h-4" />
              إضافة مشروع جديد
            </button>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatsCard key={stat.label} label={stat.label} value={stat.value} icon={stat.icon} />
            ))}
          </div>

          {/* Projects Table */}
          <div className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-[#1e1f25]/40 border-white/[0.06]' : 'bg-white/40 border-black/[0.06]'}`}>
            <div className="px-6 py-5 border-b border-white/[0.06] flex items-center justify-between">
              <h2 className={`font-semibold text-lg ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>المشاريع</h2>
              <span className={`text-xs px-3 py-1 rounded-full border ${isDark ? 'border-[#494454] text-[#958ea0]' : 'border-[#cbc3d7] text-[#6b6575]'}`}>{projects.length} مشروع</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`border-b text-xs font-semibold uppercase tracking-wider ${isDark ? 'border-white/[0.06] text-[#958ea0]' : 'border-black/[0.06] text-[#6b6575]'}`}>
                    <th className="px-6 py-4 text-right">المشروع</th>
                    <th className="px-6 py-4 text-right hidden md:table-cell">التقنيات</th>
                    <th className="px-6 py-4 text-right hidden sm:table-cell">التاريخ</th>
                    <th className="px-6 py-4 text-center">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-16 text-center">
                        <FolderOpen className={`w-10 h-10 mx-auto mb-3 ${isDark ? 'text-[#494454]' : 'text-[#cbc3d7]'}`} strokeWidth={1.5} />
                        <p className={`text-sm ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>لا توجد مشاريع حالياً</p>
                      </td>
                    </tr>
                  ) : (
                    projects.map((project, index) => (
                      <tr
                        key={project.id}
                        className={`border-b transition-colors ${isDark ? 'border-white/[0.04] hover:bg-white/[0.02]' : 'border-black/[0.04] hover:bg-black/[0.01]'} ${index % 2 === 0 ? (isDark ? 'bg-white/[0.01]' : 'bg-black/[0.005]') : ''}`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg overflow-hidden shrink-0 ${isDark ? 'bg-[#292a2f]' : 'bg-[#f0eeeb]'}`}>
                              <img src={project.imageUrl} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                            </div>
                            <div>
                              <div className={`text-sm font-semibold ${isDark ? 'text-[#e3e1e9]' : 'text-[#1a1b21]'}`}>{project.title}</div>
                              <div className={`text-xs truncate max-w-[200px] ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>{project.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <div className="flex flex-wrap gap-1.5">
                            {project.techTags.slice(0, 3).map((tag) => (
                              <span key={tag} className={`px-2 py-0.5 rounded-full text-[10px] border ${isDark ? 'border-[#03b5d3]/20 text-[#4cd7f6] bg-[#03b5d3]/5' : 'border-[#004e5c]/15 text-[#004e5c] bg-[#4cd7f6]/5'}`}>{tag}</span>
                            ))}
                            {project.techTags.length > 3 && <span className={`text-[10px] ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>+{project.techTags.length - 3}</span>}
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          <span className={`text-xs ${isDark ? 'text-[#958ea0]' : 'text-[#6b6575]'}`}>{project.createdAt}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-1">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-[#958ea0] hover:text-[#4cd7f6] hover:bg-[#4cd7f6]/10' : 'text-[#6b6575] hover:text-[#004e5c] hover:bg-[#4cd7f6]/10'}`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                            <button
                              onClick={() => handleEdit(project)}
                              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-[#958ea0] hover:text-[#d0bcff] hover:bg-[#d0bcff]/10' : 'text-[#6b6575] hover:text-[#6d3bd7] hover:bg-[#6d3bd7]/10'}`}
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
                                  deleteProject(project.id);
                                }
                              }}
                              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-[#958ea0] hover:text-red-400 hover:bg-red-500/10' : 'text-[#6b6575] hover:text-red-500 hover:bg-red-500/5'}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Project Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={addProject}
        onUpdate={updateProject}
        editingProject={editingProject}
      />
    </div>
  );
}
