/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  field: 'Engineer' | 'Scientist' | 'Technologist';
  imageUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  type: string;
  url: string;
  date: string;
}

export interface CommunityRequest {
  id: string;
  name: string;
  email: string;
  needType: 'Schools' | 'Water' | 'ICT' | 'Power' | 'Other';
  description: string;
  location: string;
  status: 'Pending' | 'Reviewed' | 'Actioned';
  date: string;
}
