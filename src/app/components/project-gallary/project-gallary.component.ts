import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-gallary',
  templateUrl: './project-gallary.component.html',
  styleUrls: ['./project-gallary.component.scss']
})
export class ProjectGallaryComponent implements OnInit {

  activeIndex$ = this.projectsService.activeIndex$;

  images$ = this.projectsService.images$

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

}
