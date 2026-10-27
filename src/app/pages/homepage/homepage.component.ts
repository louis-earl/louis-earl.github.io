import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { BlueprintSketchComponent } from '../../components/blueprint-sketch/blueprint-sketch.component';
import { featuredWork } from '../../constants/featured-work.const';
import { projects } from '../../constants/projects.const';
import { ProjectNames } from '../../models/project.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    SiteHeaderComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    BlueprintSketchComponent,
  ],
})
export class HomepageComponent {
  readonly featuredWork = featuredWork;

  readonly moreWork = [
    ProjectNames.ValocityOnsite,
    ProjectNames.ValocityExecutiveSummary,
    ProjectNames.MidnightMysteries,
    ProjectNames.OneWayWellington,
  ].map((name) => projects[name]);

  readonly highlights = [
    {
      value: 'Design to production',
      label: 'I design it and build it, so nothing gets lost in the handoff.',
    },
    {
      value: 'Built to scale',
      label: 'Interfaces that stay fast and clear with thousands of records.',
    },
    {
      value: 'Architecture I love',
      label:
        'Digging into front-end structure, where design meets problem solving.',
    },
  ];

  readonly currentYear = new Date().getFullYear();
}
