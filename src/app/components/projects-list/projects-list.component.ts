import { Component } from '@angular/core';
import { projects } from 'src/app/constants/projects.const';

import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss'],
    imports: [ProjectCardComponent]
})
export class ProjectsListComponent {

  projects = Object.values(projects);

  constructor() { }

}
