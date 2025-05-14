import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
    selector: 'app-midnight-mysteries',
    imports: [],
    templateUrl: './midnight-mysteries.component.html',
    styleUrl: './midnight-mysteries.component.scss'
})
export class MidnightMysteriesComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {

  }

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.MidnightMysteries)
  }
}
