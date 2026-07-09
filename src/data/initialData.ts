import type { Project, ServiceItem } from '@typings/index';

export const portfolioProject: Project = {
  id: 'proj-1',
  title: 'منصة نبض الحياة الطبية',
  description: 'منصة رقمية متكاملة لإدارة الخدمات الصحية والمواعيد الطبية، مصممة بأعلى معايير تجربة المستخدم لتوفير رعاية صحية سلسة وآمنة للمرضى والأطباء على حد سواء.',
  imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  techTags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
  liveLink: 'https://nabd-amber.vercel.app/',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'svc-1',
    title: 'تطوير أنظمة إدارة مخصصة',
    description: 'تصميم وتطوير أنظمة إدارة للشركات، المؤسسات، العيادات، والمشروعات المختلفة مع واجهات حديثة وسهلة الاستخدام.',
    icon: 'Building',
  },
  {
    id: 'svc-2',
    title: 'تطوير المتاجر الإلكترونية',
    description: 'إنشاء متاجر إلكترونية احترافية مع تجربة مستخدم ممتازة، إدارة المنتجات، الطلبات، ووسائل الدفع.',
    icon: 'ShoppingBag',
  },
  {
    id: 'svc-3',
    title: 'تطوير تطبيقات ويب Full-Stack',
    description: 'بناء تطبيقات ويب متكاملة باستخدام أحدث التقنيات مع قابلية التوسع وسهولة الصيانة.',
    icon: 'Globe',
  },
  {
    id: 'svc-4',
    title: 'حلول الذكاء الاصطناعي والأتمتة',
    description: 'تطوير حلول تعتمد على الذكاء الاصطناعي وأتمتة سير العمل لزيادة الإنتاجية وتقليل المهام اليدوية.',
    icon: 'Brain',
  },
  {
    id: 'svc-5',
    title: 'تطوير مواقع الشركات والهوية الرقمية',
    description: 'تصميم وتطوير مواقع احترافية للشركات والعلامات التجارية مع التركيز على الأداء، السرعة، وتجربة المستخدم.',
    icon: 'Monitor',
  },
];
