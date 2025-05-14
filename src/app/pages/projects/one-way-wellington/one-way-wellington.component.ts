import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
    selector: 'app-one-way-wellington',
    imports: [],
    templateUrl: './one-way-wellington.component.html',
    styleUrl: './one-way-wellington.component.scss'
})
export class OneWayWellingtonComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.OneWayWellington);
  }

}
