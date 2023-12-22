import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ValocityGlobalComponent } from './pages/valocity-global/valocity-global.component';
import { ProjectContentHostComponent } from './components/project-content-host/project-content-host.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomepageComponent,
    IsometricCardsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactComponent,
    ValocityGlobalComponent,
    ProjectContentHostComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
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
