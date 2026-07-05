import type { Project, ServiceItem } from '@types/index';

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'منصة نبض الطبية',
    description: 'منصة رقمية متكاملة لإدارة الخدمات الصحية والمواعيد الطبية، مصممة بأعلى معايير تجربة المستخدم.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    techTags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveLink: '#',
    createdAt: '2025-06-15',
  },
  {
    id: 'proj-2',
    title: 'موقع شركة التقنية المتقدمة',
    description: 'موقع إلكتروني احترافي لشركة تقنية متخصصة في حلول الذكاء الاصطناعي والأتمتة.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    techTags: ['WordPress', 'PHP', 'JavaScript'],
    liveLink: '#',
    createdAt: '2025-05-20',
  },
  {
    id: 'proj-3',
    title: 'لوحة تحكم التجارة الإلكترونية',
    description: 'لوحة تحكم ذكية لإدارة المتاجر الإلكترونية مع تحليلات مباشرة وإدارة المخزون.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    techTags: ['React', 'Node.js', 'MongoDB'],
    liveLink: '#',
    createdAt: '2025-04-10',
  },
  {
    id: 'proj-4',
    title: 'تطبيق إدارة المهام الذكي',
    description: 'تطبيق ويب تفاعلي لإدارة المهام والمشاريع مع دعم التعاون الجماعي والتنبيهات.',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    techTags: ['React', 'Firebase', 'TypeScript'],
    liveLink: '#',
    createdAt: '2025-03-05',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'svc-1',
    title: 'تطوير الواجهات الأمامية',
    description: 'تصميم وتطوير واجهات مستخدم تفاعلية باستخدام React وTypeScript مع أداء عالي وتجربة سلسة.',
    icon: 'Monitor',
  },
  {
    id: 'svc-2',
    title: 'تطوير WordPress',
    description: 'بناء مواقع ووردبريس احترافية مخصصة مع قوالب فريدة وإضافات مبرمجة حسب الطلب.',
    icon: 'Globe',
  },
  {
    id: 'svc-3',
    title: 'تصميم تجربة المستخدم',
    description: 'تصميم واجهات مستخدم مبتكرة تركز على سهولة الاستخدام وجمالية التصميم لتحقيق أهداف العمل.',
    icon: 'Palette',
  },
  {
    id: 'svc-4',
    title: 'حلول MERN Stack',
    description: 'تطوير تطبيقات ويب كاملة باستخدام MongoDB وExpress وReact وNode.js مع بنية قابلة للتوسع.',
    icon: 'Layers',
  },
  {
    id: 'svc-5',
    title: 'تحسين الأداء',
    description: 'تحسين سرعة وكفاءة المواقع الإلكترونية مع تحسين محركات البحث وتجربة المستخدم.',
    icon: 'Zap',
  },
  {
    id: 'svc-6',
    title: 'الاستشارات التقنية',
    description: 'تقديم استشارات متخصصة في اختيار التقنيات المناسبة وتخطيط البنية التحتية لمشاريعك.',
    icon: 'MessageSquare',
  },
];

export const ADMIN_EMAIL = 'admin@zodex.com';
export const ADMIN_PASSWORD = 'Zodex2026!';
