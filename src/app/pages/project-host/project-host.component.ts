import { Component, HostListener } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { map } from 'rxjs/operators';
import { NavigationService } from 'src/app/services/navigation.service';
import { ImageScrollerService } from 'src/app/services/image-scroller.service';

@Component({
  selector: 'app-project-host',
  templateUrl: './project-host.component.html',
  styleUrls: ['./project-host.component.scss'],
  standalone: false,
})
export class ProjectHostComponent {
  projectTitle$ = this.projectsService.project$.pipe(
    map((project) => project.title)
  );
  projectSubtitle$ = this.projectsService.project$.pipe(
    map((project) => project.logline)
  );

  constructor(
    private navigation: NavigationService,
    private projectsService: ProjectsService,
  ) {}

  back(): void {
    this.navigation.back();
  }
}
