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
    { value: '60s → <3s', label: 'load time for users with 1,000+ centres' },
    { value: 'v16 → v21', label: 'every Angular major, led end to end' },
    { value: 'Award', label: 'BuildIQ, Cityscape Global 2024' },
  ];

  readonly currentYear = new Date().getFullYear();
}
