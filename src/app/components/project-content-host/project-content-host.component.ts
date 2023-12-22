import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-content-host',
  templateUrl: './project-content-host.component.html',
  styleUrls: ['./project-content-host.component.scss']
})
export class ProjectContentHostComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  onBackButtonClick() {
    this.projectsService.closeProject();
  }

}
