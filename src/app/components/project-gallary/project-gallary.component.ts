import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-gallary',
  templateUrl: './project-gallary.component.html',
  styleUrls: ['./project-gallary.component.scss']
})
export class ProjectGallaryComponent {

  activeIndex$ = this.projectsService.activeIndex$;

  images$ = this.projectsService.project$.pipe(map((project) => {
    console.log(project.contentImages)
    return project.contentImages}));

  constructor(private projectsService: ProjectsService) { }

}
