import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { SplashComponent } from './components/splash/splash.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageResolver } from './resolvers/homepage.resolver';
import { IsometricCardsComponent } from './components/isometric-cards/isometric-cards.component';
import { ProjectsComponent } from './components/projects-list/projects-list.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectHostComponent } from './pages/project-host/project-host.component';
import { ValocityOnsiteComponent } from './pages/projects/valocity-onsite/valocity-onsite.component';
import { ProjectGallaryComponent } from './components/project-gallary/project-gallary.component';
import { ValocityGlobalComponent } from './pages/projects/valocity-global/valocity-global.component';
import { ValocityExecutiveSummaryComponent } from './pages/projects/valocity-executive-summary/valocity-executive-summary.component';
import { UpNextComponent } from './components/up-next/up-next.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomepageComponent,
    IsometricCardsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactComponent,
    ProjectHostComponent,
    UpNextComponent,
    ValocityOnsiteComponent,
    ProjectGallaryComponent,
    ValocityGlobalComponent,
    ValocityExecutiveSummaryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    BrowserAnimationsModule,
  ],
  providers: [
    SplashScreenStateService,
    HomepageResolver
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
