import { useState, useCallback } from 'react';
import type { Project } from '@types/index';
import { initialProjects } from '@data/initialData';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem('zodex_projects');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return initialProjects;
      }
    }
    return initialProjects;
  });

  const [isLoading, setIsLoading] = useState(false);

  const persist = useCallback((newProjects: Project[]) => {
    localStorage.setItem('zodex_projects', JSON.stringify(newProjects));
    setProjects(newProjects);
  }, []);

  const addProject = useCallback((project: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...project,
      id: `proj-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setProjects((prev) => {
      const updated = [newProject, ...prev];
      localStorage.setItem('zodex_projects', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<Project>) => {
    setProjects((prev) => {
      const updated = prev.map((p) => (p.id === id ? { ...p, ...updates } : p));
      localStorage.setItem('zodex_projects', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem('zodex_projects', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const refreshProjects = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const stored = localStorage.getItem('zodex_projects');
      if (stored) {
        try {
          setProjects(JSON.parse(stored));
        } catch {
          setProjects(initialProjects);
        }
      }
      setIsLoading(false);
    }, 800);
  }, []);

  return {
    projects,
    isLoading,
    addProject,
    updateProject,
    deleteProject,
    refreshProjects,
    setIsLoading,
  };
}
