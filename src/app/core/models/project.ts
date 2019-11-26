import { Granularity } from '@coreEnums/granularity.enum';
import { ProjectScope, ProjectFunctionalArea } from '@coreEnums/project.enum';
import { UserScope } from '@coreEnums/user-scope.enum';
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
  userScope?: UserScope;
  granularity?: Granularity;
  projectScope?: ProjectScope;
  projectFunctionalArea?: ProjectFunctionalArea;
  latestCommit?: Commit;
  latestReleaseCommit?: Commit;
  coverage?: string;
}

export interface Commit {
  Id: number;
  Comment: string;
  Date: string;
}
