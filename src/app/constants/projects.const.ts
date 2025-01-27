import { Project, ProjectNames } from "../models/project.model";

export const projects: {[key in ProjectNames]: Project} = {
    midnightMysteries: {
        title: 'Midnight Mysteries',
        logline: 'A multiplayer murder game',
        heroImage: '',
        contentImages: ['mm-present-1.jpg', 'mm-present-2.jpg'],
        nextUp: ProjectNames.OneWayWellington
    },
    oneWayWellington: {
        title: 'One Way Wellington',
        logline: 'A spaceship building game that\'s out of this world.',
        heroImage: '',
        contentImages: [
            'oww-poster.jpg', 'oww-ship.jpg', 'oww-gameplay.jpg'
        ],
        nextUp: ProjectNames.ValocityGlobal
    },
    valocityExecutiveSummary: {
        title: 'Valocity Executive Summary',
        logline: 'A report that enables quick lending decisions',
        heroImage: '',
        contentImages: [
            
        ],
        nextUp: ProjectNames.MidnightMysteries
    },
    valocityGlobal: {
        title: 'Valocity Global Platform',
        logline: 'A valuation ordering platform for lenders',
        heroImage: '',
        contentImages: [
            
        ],
        nextUp: ProjectNames.ValocityOnsite
    },
    valocityOnsite: {
        title: 'Valocity Onsite',
        logline: 'An app that simplifies property valuations',
        heroImage: '',
        contentImages: [
            
        ],
        nextUp: ProjectNames.ValocityExecutiveSummary
    }
}