export interface Project {
    title: string;
    logline: string;
    route: string;
    heroImage: string;
    nextUp: ProjectNames;
    description: string;
}

export interface ContentImage {
    fileName: string;
    objectFit: 'contain' | 'cover'
}

export enum ProjectNames {
    MidnightMysteries = 'midnightMysteries',
    OneWayWellington = 'oneWayWellington',
    ValocityExecutiveSummary = 'valocityExecutiveSummary',
    ValocityGlobal = 'valocityGlobal',
    ValocityOnsite = 'valocityOnsite',

}