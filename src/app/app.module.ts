import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { SplashComponent } from './components/splash/splash.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageResolver } from './resolvers/homepage.resolver';
import { ProjectsComponent } from './components/projects-list/projects-list.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectHostComponent } from './pages/project-host/project-host.component';
import { ValocityOnsiteComponent } from './pages/projects/valocity-onsite/valocity-onsite.component';
import { ProjectGallaryComponent } from './components/project-gallary/project-gallary.component';
import { ValocityGlobalComponent } from './pages/projects/valocity-global/valocity-global.component';
import { ValocityExecutiveSummaryComponent } from './pages/projects/valocity-executive-summary/valocity-executive-summary.component';
import { UpNextComponent } from './components/up-next/up-next.component';
import { ExpansionContentComponent } from './components/expansion-content/expansion-content.component';
import { AboutComponent } from './components/about/about.component';
import { ImageScrollerContainerComponent } from './components/image-scroller-container/image-scroller-container.component';
import { ImageScrollerTargetDirective } from './directives/image-scroller-target.directive';
import { MidnightMysteriesComponent } from './pages/projects/midnight-mysteries/midnight-mysteries.component';
import { OneWayWellingtonComponent } from './pages/projects/one-way-wellington/one-way-wellington.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        AboutComponent,
        SplashComponent,
        HomepageComponent,
        ProjectsComponent,
        ProjectCardComponent,
        ContactComponent,
        ProjectHostComponent,
        UpNextComponent,
        ValocityOnsiteComponent,
        ProjectGallaryComponent,
        ValocityGlobalComponent,
        ValocityExecutiveSummaryComponent,
        ExpansionContentComponent,
        ImageScrollerContainerComponent,
        ImageScrollerTargetDirective,
        MidnightMysteriesComponent,
        OneWayWellingtonComponent,
        HeroComponent,
        SkillsComponent,
        HeaderComponent,
    ],
    providers: [SplashScreenStateService, HomepageResolver],
    bootstrap: [AppComponent],
})
export class AppModule {}
