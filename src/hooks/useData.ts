import { useState, useEffect } from 'react';
import { Project, Member, Resource, CommunityRequest } from '../types';
import { INITIAL_PROJECTS, INITIAL_MEMBERS, INITIAL_RESOURCES } from '../data/initialData';

export function useData() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [requests, setRequests] = useState<CommunityRequest[]>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem('niesat_projects');
    const storedMembers = localStorage.getItem('niesat_members');
    const storedResources = localStorage.getItem('niesat_resources');
    const storedRequests = localStorage.getItem('niesat_requests');

    if (storedProjects) setProjects(JSON.parse(storedProjects));
    else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('niesat_projects', JSON.stringify(INITIAL_PROJECTS));
    }

    if (storedMembers) setMembers(JSON.parse(storedMembers));
    else {
      setMembers(INITIAL_MEMBERS);
      localStorage.setItem('niesat_members', JSON.stringify(INITIAL_MEMBERS));
    }

    if (storedResources) setResources(JSON.parse(storedResources));
    else {
      setResources(INITIAL_RESOURCES);
      localStorage.setItem('niesat_resources', JSON.stringify(INITIAL_RESOURCES));
    }

    if (storedRequests) setRequests(JSON.parse(storedRequests));
  }, []);

  const saveData = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const addProject = (project: Project) => {
    const newProjects = [...projects, project];
    setProjects(newProjects);
    saveData('niesat_projects', newProjects);
  };

  const deleteProject = (id: string) => {
    const newProjects = projects.filter(p => p.id !== id);
    setProjects(newProjects);
    saveData('niesat_projects', newProjects);
  };

  const addMember = (member: Member) => {
    const newMembers = [...members, member];
    setMembers(newMembers);
    saveData('niesat_members', newMembers);
  };

  const deleteMember = (id: string) => {
    const newMembers = members.filter(m => m.id !== id);
    setMembers(newMembers);
    saveData('niesat_members', newMembers);
  };

  const addResource = (resource: Resource) => {
    const newResources = [...resources, resource];
    setResources(newResources);
    saveData('niesat_resources', newResources);
  };

  const deleteResource = (id: string) => {
    const newResources = resources.filter(r => r.id !== id);
    setResources(newResources);
    saveData('niesat_resources', newResources);
  };

  const addRequest = (request: CommunityRequest) => {
    const newRequests = [...requests, request];
    setRequests(newRequests);
    saveData('niesat_requests', newRequests);
  };

  return {
    projects,
    members,
    resources,
    requests,
    addProject,
    deleteProject,
    addMember,
    deleteMember,
    addResource,
    deleteResource,
    addRequest
  };
}
