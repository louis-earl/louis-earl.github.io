import { Component } from '@angular/core';
import { ImageScrollerContainerComponent } from 'src/app/components/image-scroller-container/image-scroller-container.component';
import { ImageScrollerTargetDirective } from 'src/app/directives/image-scroller-target.directive';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-valocity-dashboard',
  imports: [ImageScrollerContainerComponent, ImageScrollerTargetDirective],
  templateUrl: './valocity-dashboard.component.html',
})
export class ValocityDashboardComponent {
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.ValocityDashboard);
  }
}
