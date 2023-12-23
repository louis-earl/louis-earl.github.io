import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-valocity-onsite',
  templateUrl: './valocity-onsite.component.html',
  styleUrls: ['./valocity-onsite.component.scss']
})
export class ValocityOnsiteComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.setTitle('Valocity Onsite');
    this.projectsService.setSubtitle('An app that simplifies property valuations')
  }

}
