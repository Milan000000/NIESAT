import { Project, Member, Resource } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Solar-Powered Borehole for Ikorodu Community',
    description: 'A sustainable water solution providing clean water to over 500 residents using renewable energy.',
    date: '2024-01-15',
    location: 'Ikorodu, Lagos',
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'ICT Training Center Revitalization',
    description: 'Upgrading local school computer labs and providing basic digital literacy training for students.',
    date: '2023-11-20',
    location: 'Abuja Municipal',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
  }
];

export const INITIAL_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'Engr. Chidi Okafor',
    role: 'President',
    field: 'Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    name: 'Dr. Amina Bello',
    role: 'Technical Lead',
    field: 'Scientist',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '3',
    name: 'Samuel Adeyemi',
    role: 'Secretary',
    field: 'Technologist',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  }
];

export const INITIAL_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Sustainable Engineering Handbook',
    type: 'PDF',
    url: '#',
    date: '2024-02-01',
  },
  {
    id: '2',
    title: 'Community Needs Assessment Template',
    type: 'DOCX',
    url: '#',
    date: '2024-01-10',
  }
];
