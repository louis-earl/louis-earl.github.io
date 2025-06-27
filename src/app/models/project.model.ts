export interface Project {
  title: string;
  logline: string;
  route: string;
  heroImage: string;
  nextUp: ProjectNames;
  description: string;
  categories: ProjectCategories[];
}

export interface ContentImage {
  fileName: string;
  objectFit: 'contain' | 'cover';
}

export enum ProjectNames {
  MidnightMysteries = 'midnightMysteries',
  OneWayWellington = 'oneWayWellington',
  ValocityExecutiveSummary = 'valocityExecutiveSummary',
  ValocityGlobal = 'valocityGlobal',
  ValocityOnsite = 'valocityOnsite',
}

export enum ProjectCategories {
  Development = 'Development',
  Design = 'Design',
  Game = 'Game',
}
