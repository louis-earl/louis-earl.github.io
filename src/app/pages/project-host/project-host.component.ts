import { Component, HostListener } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-project-host',
  templateUrl: './project-host.component.html',
  styleUrls: ['./project-host.component.scss']
})
export class ProjectHostComponent {

  projectTitle$ = this.projectsService.project$.pipe(map((project) => project.title));
  projectSubtitle$ = this.projectsService.project$.pipe(map((project) => project.logline));

  constructor(private projectsService: ProjectsService) { }

  @HostListener('window:scroll')
  onPageScroll() {

    const activatorHeight = window.innerHeight * 0.3;
    let activeIndex = 0;
    this.segmentElements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < activatorHeight) {
        element.classList.add('active');
        activeIndex = index;
      }
      else {
        element.classList.remove('active')
      }
      
    });
    this.projectsService.setActiveIndex(activeIndex);
  }

  get segmentElements(): Element[] {
    return Array.from(document.getElementsByClassName('segment-trigger'));
  }

}
