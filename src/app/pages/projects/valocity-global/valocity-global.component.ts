import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-valocity-global',
  templateUrl: './valocity-global.component.html',
  styleUrls: ['./valocity-global.component.scss']
})
export class ValocityGlobalComponent implements OnInit {

  constructor(private readonly projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.ValocityGlobal)
  }

}
