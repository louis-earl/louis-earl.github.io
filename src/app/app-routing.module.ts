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
        component: ValocityOnsiteComponent
      },
      {
        path: 'valocity-global',
        component: ValocityGlobalComponent
      },
      {
        path: 'valocity-executive-summary',
        component: ValocityExecutiveSummaryComponent
      },
      {
        path: 'midnight-mysteries',
        component: MidnightMysteriesComponent
      },
      {
        path: 'one-way-wellington', 
        component: OneWayWellingtonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
