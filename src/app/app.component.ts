import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { AnimationEvent } from '@angular/animations';
import { NavigationService } from './services/navigation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
    standalone: false
})
export class AppComponent {
  title = 'portfolio-neon';
  
  constructor(
    private contexts: ChildrenOutletContexts,
    private navigation: NavigationService,
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  onAnimationEvent(event: AnimationEvent) {
    console.log('animation event:', event)
    if (event.toState === 'ProjectsPage') {
      console.log('going to projects page')
      document.body.style.setProperty('--projects-page-offset', (-window.scrollY).toString() + 'px')
    }
    else if (event.toState === 'HomePage') {
      console.log('going to home page')
      console.log(window.scrollY)
    }
  }

}
