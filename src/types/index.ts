export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techTags: string[];
  liveLink: string;
  createdAt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AdminCredentials {
  email: string;
  password: string;
}

export type ThemeMode = 'dark' | 'light';

export type RoutePath = '/' | '/login' | '/admin/dashboard';
