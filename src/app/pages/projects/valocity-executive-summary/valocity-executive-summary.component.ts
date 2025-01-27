import { Component, OnInit } from '@angular/core';
import { ProjectNames } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-valocity-executive-summary',
  templateUrl: './valocity-executive-summary.component.html',
  styleUrls: ['./valocity-executive-summary.component.scss']
})
export class ValocityExecutiveSummaryComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.setProject(ProjectNames.ValocityExecutiveSummary)
  }

}
