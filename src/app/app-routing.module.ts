import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageResolver } from './resolvers/homepage.resolver';
import { ValocityGlobalComponent } from './pages/valocity-global/valocity-global.component';
import { ProjectHostComponent } from './pages/project-host/project-host.component';

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
    data: {animation: 'ProjectsPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
