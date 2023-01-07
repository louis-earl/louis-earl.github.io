import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { SplashComponent } from './components/splash/splash.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageResolver } from './resolvers/homepage.resolver';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomepageComponent
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
