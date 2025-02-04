export interface Project {
    title: string;
    logline: string;
    route: string;
    heroImage: string;
    contentImages: string[];
    nextUp: ProjectNames;
    description: string;
}

export enum ProjectNames {
    MidnightMysteries = 'midnightMysteries',
    OneWayWellington = 'oneWayWellington',
    ValocityExecutiveSummary = 'valocityExecutiveSummary',
    ValocityGlobal = 'valocityGlobal',
    ValocityOnsite = 'valocityOnsite',

}