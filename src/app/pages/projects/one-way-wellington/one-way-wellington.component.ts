import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
    selector: 'app-one-way-wellington',
    templateUrl: './one-way-wellington.component.html',
    styleUrl: './one-way-wellington.component.scss',
    standalone: false,
})
export class OneWayWellingtonComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.OneWayWellington);
  }

}
