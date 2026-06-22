import { useState, useEffect } from 'react';
import { Project } from '../types';
import { getProjects, subscribeToProjects } from '../services/projectService';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(getProjects);

  useEffect(() => {
    // Sync initially just in case
    setProjects(getProjects());
    
    // Subscribe to any updates made from other widgets or the admin panel
    const unsubscribe = subscribeToProjects((updatedProjects) => {
      setProjects(updatedProjects);
    });
    
    return unsubscribe;
  }, []);

  return projects;
}
