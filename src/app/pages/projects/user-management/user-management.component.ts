import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { ImageScrollerContainerComponent } from '../../../components/image-scroller-container/image-scroller-container.component';
import { ImageScrollerTargetDirective } from '../../../directives/image-scroller-target.directive';
import { ExpansionContentComponent } from '../../../components/expansion-content/expansion-content.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: '../project-shared.scss',
  imports: [ImageScrollerContainerComponent, ImageScrollerTargetDirective, ExpansionContentComponent],
})
export class UserManagementComponent implements OnInit {
  constructor(private readonly projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.UserManagement);
  }
}
