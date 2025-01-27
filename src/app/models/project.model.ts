export interface Project {
    title: string;
    logline: string;
    heroImage: string;
    contentImages: string[];
    nextUp: ProjectNames;
}

export enum ProjectNames {
    MidnightMysteries = 'midnightMysteries',
    OneWayWellington = 'oneWayWellington',
    ValocityExecutiveSummary = 'valocityExecutiveSummary',
    ValocityGlobal = 'valocityGlobal',
    ValocityOnsite = 'valocityOnsite',

}