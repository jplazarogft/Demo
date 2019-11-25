import { Technology } from '@coreModels/technology';
export interface Project {
  projectId?: string;
  projectName: string;
  projectDescription: string;
  projectType: string;
  urlImage: string;
  urlSample?: string;
  urlCode?: string;
  projectTechonologies: Technology[];
  userScope?: string;
  granularity?: string;
}
