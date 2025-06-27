import { Component } from '@angular/core';
import { projects } from 'src/app/constants/projects.const';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss'],
    imports: [NgFor, ProjectCardComponent]
})
export class ProjectsComponent {

  projects = Object.values(projects);

  constructor() { }

}
