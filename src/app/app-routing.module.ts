import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageResolver } from './resolvers/homepage.resolver';
import { ProjectHostComponent } from './pages/project-host/project-host.component';
import { ValocityOnsiteComponent } from './pages/projects/valocity-onsite/valocity-onsite.component';
import { ValocityGlobalComponent } from './pages/projects/valocity-global/valocity-global.component';
import { ValocityExecutiveSummaryComponent } from './pages/projects/valocity-executive-summary/valocity-executive-summary.component';
import { MidnightMysteriesComponent } from './pages/projects/midnight-mysteries/midnight-mysteries.component';
import { OneWayWellingtonComponent } from './pages/projects/one-way-wellington/one-way-wellington.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
    title: 'Louis Earl | UX Engineer',
    // resolve: {'itemsList': HomepageResolver},
    data: {animation: 'HomePage'}
  },
  {
    path: 'projects',
    component: ProjectHostComponent,
    // resolve: {'itemsList': HomepageResolver},
    data: {animation: 'ProjectsPage'},
    children: [
      {
        path: 'valocity-onsite',
        component: ValocityOnsiteComponent,
        title: 'Louis Earl | Valocity Onsite',
      },
      {
        path: 'valocity-connect',
        component: ValocityGlobalComponent,
        title: 'Louis Earl | Valocity Connect',
      },
      {
        path: 'valocity-executive-summary',
        component: ValocityExecutiveSummaryComponent,
        title: 'Louis Earl | Valocity Executive Summary',
      },
      {
        path: 'midnight-mysteries',
        component: MidnightMysteriesComponent,
        title: 'Louis Earl | Midnight Mysteries',
      },
      {
        path: 'one-way-wellington', 
        component: OneWayWellingtonComponent,
        title: 'Louis Earl | One Way Wellington',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
