import { Project, ProjectNames } from "../models/project.model";

export const projects: {[key in ProjectNames]: Project} = {
    midnightMysteries: {
        title: 'Midnight Mysteries',
        logline: 'A multiplayer murder game that turns friends into suspects.',
        route: 'midnight-mysteries',
        heroImage: 'midnight-mysteries.png',
        contentImages: [
            {fileName: 'mm-present-1.jpg', objectFit: 'cover'}, 
            {fileName: 'mm-present-2.jpg', objectFit: 'cover'},
        ],
        nextUp: ProjectNames.OneWayWellington,
        description: 'Using React and some websocket magic, I helped develop a multiplayer game that turns everyone in the room against each other.'
    },
    oneWayWellington: {
        title: 'One Way Wellington',
        logline: 'A spaceship building game that\'s out of this world.',
        route: 'one-way-wellington',
        heroImage: 'oww-poster.jpg',
        contentImages: [
            {fileName: 'oww-poster.jpg', objectFit: 'contain'}, 
            {fileName: 'oww-ship.jpg', objectFit: 'cover'},
            {fileName: 'oww-gameplay.jpg', objectFit: 'cover'},
        ],
        nextUp: ProjectNames.ValocityGlobal,
        description: 'I created a spaceship building game about transporting creative talent across the Milky Way to Wellington, the ‘Coolest Little Capital’.'
    },
    valocityExecutiveSummary: {
        title: 'Valocity Executive Summary',
        logline: 'A report that enables quick lending decisions',
        route: 'valocity-executive-summary',
        heroImage: 'executive-summary.png',
        contentImages: [
            {fileName: 'executive-summary.png', objectFit: 'contain'},
        ],
        nextUp: ProjectNames.MidnightMysteries,
        description: 'Redesigning a report intended for A4 print/PDF. Despite more complex requirements, I put together a simple, more intuitive prototype.'
    },
    valocityGlobal: {
        title: 'Valocity Connect',
        logline: 'A dynamic form builder that simplifies property inspections.',
        route: 'valocity-global',
        heroImage: 'global-hero.webp',
        contentImages: [
            {fileName: 'global-hero.webp', objectFit: 'contain'},
            {fileName: 'modular-form.png', objectFit: 'contain'}
        ],
        nextUp: ProjectNames.ValocityOnsite,
        description: 'Embracing my role as a hybrid developer/designer, I jump between designing feature-rich interfaces in Figma, to writing beautiful, well tested code in Angular.'
    },
    valocityOnsite: {
        title: 'Valocity Onsite',
        logline: 'An app that simplifies property valuations',
        route: 'valocity-onsite',
        heroImage: 'onsite-hero.webp',
        contentImages: [
            {fileName: 'onsite-hero.webp', objectFit: 'contain'}, 
        ],
        nextUp: ProjectNames.ValocityExecutiveSummary,
        description: 'I redesigned a mobile app that wasn\'t getting much use. Now it\'s set to streamline the way valuation firms collect property data'
    }
}