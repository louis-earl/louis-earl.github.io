import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageResolver } from './resolvers/homepage.resolver';
import { ValocityGlobalComponent } from './pages/valocity-global/valocity-global.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    resolve: {'itemsList': HomepageResolver}
  },
  {
    path: 'projects/valocity-global',
    component: ValocityGlobalComponent,
    resolve: {'itemsList': HomepageResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
