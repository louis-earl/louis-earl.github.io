import { BlueprintSketchVariant } from '../components/blueprint-sketch/blueprint-sketch.component';

export interface FeaturedWork {
  title: string;
  years: string;
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
    title: 'Access management overhaul',
    years: '2026',
    summary:
      'Owned end to end for enterprise banks, from requirements to API. I split a heavy endpoint into lazy-loaded APIs, optimised the queries behind it, and swapped nested dropdowns for typeahead search, infinite scroll and bulk selection.',
    tags: ['UX', 'Angular', '.NET'],
    sketch: 'admin',
    sketchLabel:
      'Line drawing of an admin screen with an organisation tree, a search box and a selectable list',
    sketchCaption: '~60s → under 3s',
  },
  {
    title: 'Valuation orders dashboard',
    years: '2024–2025',
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
    years: '2023–2024',
    summary:
      'Award-winning construction lending, built on a modular Angular form framework that now runs valuations in India and the UAE.',
    tags: ['Design + build', 'Forms', 'Mobile'],
    sketch: 'form',
    sketchLabel:
      'Line drawing of a multi-step form with a progress stepper and input fields',
    route: '/projects/valocity-connect',
  },
];
