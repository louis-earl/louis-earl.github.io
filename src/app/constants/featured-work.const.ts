import { BlueprintSketchVariant } from '../components/blueprint-sketch/blueprint-sketch.component';

export interface FeaturedWork {
  title: string;
  /** What I did, in one catchy line. Leads the card so it reads without knowing the product. */
  logline: string;
  summary: string;
  tags: string[];
  sketch: BlueprintSketchVariant;
  sketchLabel: string;
  sketchCaption?: string;
  /** Route to the full case study, when one exists. */
  route?: string;
}

export const featuredWork: FeaturedWork[] = [
  {
    title: 'User management overhaul',
    logline: 'A user management rebuild that loads in seconds, not minutes.',
    summary:
      'Owned end to end for enterprise banks, from requirements to API. I broke a long, ever-growing form into four focused tabs, and rebuilt the slowest one, centre access, with lazy-loaded APIs, typeahead search across a parent/child hierarchy, and bulk selection.',
    tags: ['UX', 'Angular', '.NET'],
    sketch: 'admin',
    sketchLabel:
      'Line drawing of a user profile screen with four tabs, an organisation tree, a search box and a selectable list',
    sketchCaption: '~60s → under 3s',
    route: '/projects/user-management',
  },
  {
    title: 'Valuation orders dashboard',
    logline: 'A dashboard overhaul that delivers insights at a glance.',
    summary:
      'The workspace lenders use to track every valuation order. I set the front-end architecture my team adopted and built a configurable grid that stays fast across thousands of orders.',
    tags: ['Architecture', 'RxJS', 'Performance'],
    sketch: 'grid',
    sketchLabel:
      'Line drawing of a data grid with filter chips, a header row and several data rows',
    route: '/projects/valocity-dashboard',
  },
  {
    title: 'BuildIQ',
    logline: 'A dynamic form builder that simplifies property inspections.',
    summary:
      'Award-winning construction lending, built on a modular Angular form framework that now runs valuations in India and the UAE.',
    tags: ['Design + build', 'Forms', 'Mobile'],
    sketch: 'form',
    sketchLabel:
      'Line drawing of a multi-step form with a progress stepper and input fields',
    route: '/projects/valocity-connect',
  },
];
