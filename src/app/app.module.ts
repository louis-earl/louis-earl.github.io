import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenStateService } from './services/splash-screen-state.service';
import { HomepageResolver } from './resolvers/homepage.resolver';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [SplashScreenStateService, HomepageResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
