import { Component } from '@angular/core';
import { projects } from 'src/app/constants/projects.const';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsComponent {

  projects = Object.values(projects);

  constructor() { }

}
