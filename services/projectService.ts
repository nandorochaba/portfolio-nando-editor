import { Project, ProjectStatus } from '../types';
import { projectsData } from '../data/projects';

const STORAGE_KEY = 'portfolio_projects';
const EVENT_NAME = 'portfolio-projects-updated';

export const getProjects = (): Project[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsData));
    return projectsData;
  }
  try {
    const parsed = JSON.parse(data) as Project[];
    let migrated = false;
    
    const parsedMap = new Map(parsed.map(p => [p.id, p]));
    const mergedList: Project[] = [...parsed];

    // For each project in default projectsData
    projectsData.forEach((dp) => {
      const existing = parsedMap.get(dp.id);
      if (!existing) {
        // If a default project is missing completely (e.g., newly added YouTube case), append it!
        mergedList.push(dp);
        migrated = true;
      } else {
        // If it exists but has a different or missing videoUrl, synchronize it to ensure video plays
        if (existing.videoUrl !== dp.videoUrl) {
          existing.videoUrl = dp.videoUrl;
          migrated = true;
        }
      }
    });

    if (migrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedList));
    }
    return mergedList;
  } catch (e) {
    return projectsData;
  }
};

export const saveProjects = (projects: Project[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: projects }));
};

export const addProject = (project: Omit<Project, 'id'> & { id?: string }): Project => {
  const projects = getProjects();
  const newId = project.id || `project-${Date.now()}`;
  
  const newProject: Project = {
    ...project,
    id: newId,
    status: project.status || ProjectStatus.DELIVERED,
    metrics: project.metrics || [],
    tech_stack: project.tech_stack || [],
  };

  const updated = [...projects, newProject];
  saveProjects(updated);
  return newProject;
};

export const updateProject = (id: string, updatedProject: Partial<Project>): void => {
  const projects = getProjects();
  const updated = projects.map(p => {
    if (p.id === id) {
      return { ...p, ...updatedProject } as Project;
    }
    return p;
  });
  saveProjects(updated);
};

export const deleteProject = (id: string): void => {
  const projects = getProjects();
  const updated = projects.filter(p => p.id !== id);
  saveProjects(updated);
};

export const resetProjectsToDefault = (): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsData));
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: projectsData }));
};

export const subscribeToProjects = (callback: (projects: Project[]) => void): (() => void) => {
  const listener = (event: Event) => {
    const customEvent = event as CustomEvent<Project[]>;
    callback(customEvent.detail);
  };
  
  window.addEventListener(EVENT_NAME, listener);
  return () => {
    window.removeEventListener(EVENT_NAME, listener);
  };
};
