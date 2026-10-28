import {
  Project,
  ProjectCategories,
  ProjectNames,
} from '../models/project.model';

export const projects: { [key in ProjectNames]: Project } = {
  userManagement: {
    title: 'User management overhaul',
    logline: 'A user management rebuild that loads in seconds, not minutes.',
    route: 'user-management',
    thumbnail: 'user-management/placeholder.svg',
    heroImage: 'user-management/placeholder.svg',
    nextUp: ProjectNames.ValocityGlobal,
    description:
      'I redesigned and rebuilt the Create and Edit User pages that enterprise banks use to manage their users’ full profiles, from the first requirements through to the API. A project that pulled in all three layers: design, front end and back end.',
    categories: [ProjectCategories.Development],
  },
  valocityGlobal: {
    title: 'Valocity Connect',
    logline: 'A dynamic form builder that simplifies property inspections.',
    route: 'valocity-connect',
    thumbnail: 'thumbs/valocity-connect.webp',
    heroImage: 'global-hero.webp',
    nextUp: ProjectNames.ValocityDashboard,
    description:
      'Embracing my role as a hybrid developer/designer, I jump between designing feature-rich interfaces in Figma, to writing beautiful, well tested code in Angular.',
    categories: [ProjectCategories.Design, ProjectCategories.Development],
  },
  valocityDashboard: {
    title: 'Valocity Dashboard',
    logline: 'A dashboard overhaul that delivers insights at a glance.',
    route: 'valocity-dashboard',
    heroImage: '',
    nextUp: ProjectNames.ValocityOnsite,
    description:
      'I led the front-end development of a dashboard that helps lenders track their valuation orders.',
    categories: [ProjectCategories.Development],
  },
  valocityOnsite: {
    title: 'Valocity Onsite',
    logline: 'An app helping property valuations go paperless.',
    route: 'valocity-onsite',
    thumbnail: 'thumbs/valocity-onsite.webp',
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
    thumbnail: 'thumbs/valocity-executive-summary.webp',
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
    thumbnail: 'thumbs/midnight-mysteries.webp',
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
    thumbnail: 'thumbs/one-way-wellington.webp',
    heroImage: 'oww-poster.jpg',
    nextUp: ProjectNames.UserManagement,
    description:
      'I created a spaceship building game about transporting creative talent across the Milky Way to Wellington, the ‘Coolest Little Capital’.',
    categories: [ProjectCategories.Development, ProjectCategories.Game],
  },
};
