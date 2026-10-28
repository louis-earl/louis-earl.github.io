import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
    title: 'Louis Earl | Front-end engineer',
    data: { animation: 'HomePage' },
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/project-host/project-host.component').then(
        (m) => m.ProjectHostComponent
      ),
    data: { animation: 'ProjectsPage' },
    children: [
      {
        path: 'user-management',
        loadComponent: () =>
          import(
            './pages/projects/user-management/user-management.component'
          ).then((m) => m.UserManagementComponent),
        title: 'Louis Earl | User management overhaul',
      },
      {
        path: 'valocity-onsite',
        loadComponent: () =>
          import(
            './pages/projects/valocity-onsite/valocity-onsite.component'
          ).then((m) => m.ValocityOnsiteComponent),
        title: 'Louis Earl | Valocity Onsite',
      },
      {
        path: 'valocity-connect',
        loadComponent: () =>
          import(
            './pages/projects/valocity-global/valocity-global.component'
          ).then((m) => m.ValocityGlobalComponent),
        title: 'Louis Earl | Valocity Connect',
      },
      {
        path: 'valocity-dashboard',
        loadComponent: () =>
          import(
            './pages/projects/valocity-dashboard/valocity-dashboard.component'
          ).then((m) => m.ValocityDashboardComponent),
        title: 'Louis Earl | Valocity Dashboard',
      },
      {
        path: 'valocity-executive-summary',
        loadComponent: () =>
          import(
            './pages/projects/valocity-executive-summary/valocity-executive-summary.component'
          ).then((m) => m.ValocityExecutiveSummaryComponent),
        title: 'Louis Earl | Valocity Executive Summary',
      },
      {
        path: 'midnight-mysteries',
        loadComponent: () =>
          import(
            './pages/projects/midnight-mysteries/midnight-mysteries.component'
          ).then((m) => m.MidnightMysteriesComponent),
        title: 'Louis Earl | Midnight Mysteries',
      },
      {
        path: 'one-way-wellington',
        loadComponent: () =>
          import(
            './pages/projects/one-way-wellington/one-way-wellington.component'
          ).then((m) => m.OneWayWellingtonComponent),
        title: 'Louis Earl | One Way Wellington',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
