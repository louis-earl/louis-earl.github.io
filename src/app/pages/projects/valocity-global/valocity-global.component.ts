import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { ImageScrollerContainerComponent } from '../../../components/image-scroller-container/image-scroller-container.component';
import { ImageScrollerTargetDirective } from '../../../directives/image-scroller-target.directive';
import { ExpansionContentComponent } from '../../../components/expansion-content/expansion-content.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-valocity-global',
    templateUrl: './valocity-global.component.html',
    styleUrl: '../project-shared.scss',
    imports: [ImageScrollerContainerComponent, ImageScrollerTargetDirective, ExpansionContentComponent, RouterLink]
})
export class ValocityGlobalComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.ValocityGlobal)
  }

}
