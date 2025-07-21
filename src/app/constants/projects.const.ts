import {
  Project,
  ProjectCategories,
  ProjectNames,
} from '../models/project.model';

export const projects: { [key in ProjectNames]: Project } = {
  valocityGlobal: {
    title: 'Valocity Connect',
    logline: 'A dynamic form builder that simplifies property inspections.',
    route: 'valocity-connect',
    heroImage: 'global-hero.webp',
    nextUp: ProjectNames.ValocityOnsite,
    description:
      'Embracing my role as a hybrid developer/designer, I jump between designing feature-rich interfaces in Figma, to writing beautiful, well tested code in Angular.',
    categories: [ProjectCategories.Design, ProjectCategories.Development],
  },
  valocityOnsite: {
    title: 'Valocity Onsite',
    logline: 'An app helping property valuations go paperless.',
    route: 'valocity-onsite',
    heroImage: 'onsite-hero.webp',
    nextUp: ProjectNames.ValocityExecutiveSummary,
    description:
      "I redesigned a mobile app that wasn't getting much use. Now it's set to streamline the way valuation firms collect property data.",
    categories: [ProjectCategories.Design],
  },
  valocityExecutiveSummary: {
    title: 'Valocity Executive Summary',
    logline: 'A report that enables lightning-fast lending decisions.',
    route: 'valocity-executive-summary',
    heroImage: 'executive-summary-hero.png',
    nextUp: ProjectNames.MidnightMysteries,
    description:
      'Redesigning a report intended for A4 print/PDF. Despite more complex requirements, I put together a simple, more intuitive prototype.',
    categories: [ProjectCategories.Design],
  },
  midnightMysteries: {
    title: 'Midnight Mysteries',
    logline: 'A multiplayer murder game that turns friends into suspects.',
    route: 'midnight-mysteries',
    heroImage: 'midnight-mysteries.png',
    nextUp: ProjectNames.OneWayWellington,
    description:
      'Using React and some websocket magic, I helped develop a multiplayer game that turns everyone in the room against each other.',
    categories: [ProjectCategories.Development, ProjectCategories.Game],
  },
  oneWayWellington: {
    title: 'One Way Wellington',
    logline: "A spaceship building game that's out of this world.",
    route: 'one-way-wellington',
    heroImage: 'oww-poster.jpg',
    nextUp: ProjectNames.ValocityGlobal,
    description:
      'I created a spaceship building game about transporting creative talent across the Milky Way to Wellington, the ‘Coolest Little Capital’.',
    categories: [ProjectCategories.Development, ProjectCategories.Game],
  },
};
