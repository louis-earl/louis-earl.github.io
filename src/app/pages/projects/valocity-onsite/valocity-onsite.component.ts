import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
    selector: 'app-valocity-onsite',
    templateUrl: './valocity-onsite.component.html',
    styleUrls: ['./valocity-onsite.component.scss'],
    standalone: false
})
export class ValocityOnsiteComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.ValocityOnsite);
  }

}
