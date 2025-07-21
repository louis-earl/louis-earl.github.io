import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { ImageScrollerContainerComponent } from '../../../components/image-scroller-container/image-scroller-container.component';
import { ImageScrollerTargetDirective } from '../../../directives/image-scroller-target.directive';

@Component({
    selector: 'app-midnight-mysteries',
    templateUrl: './midnight-mysteries.component.html',
    styleUrl: '../project-shared.scss',
    imports: [ImageScrollerContainerComponent, ImageScrollerTargetDirective],
})
export class MidnightMysteriesComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {

  }

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.MidnightMysteries)
  }
}
