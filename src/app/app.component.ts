import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { AnimationEvent } from '@angular/animations';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation],
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(
    private contexts: ChildrenOutletContexts,
    private navigation: NavigationService,
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  onAnimationEvent(event: AnimationEvent) {
    if (event.toState === 'ProjectsPage') {
      document.body.style.setProperty(
        '--projects-page-offset',
        (-window.scrollY).toString() + 'px',
      );
    }
  }
}
