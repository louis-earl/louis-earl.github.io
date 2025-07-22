import { Component, HostListener } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { map } from 'rxjs/operators';
import { NavigationService } from 'src/app/services/navigation.service';
import { ImageScrollerService } from 'src/app/services/image-scroller.service';
import { ProjectGallaryComponent } from '../../components/project-gallary/project-gallary.component';
import { RouterOutlet } from '@angular/router';
import { UpNextComponent } from '../../components/up-next/up-next.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-host',
  templateUrl: './project-host.component.html',
  styleUrls: ['./project-host.component.scss'],
  imports: [
    ProjectGallaryComponent,
    RouterOutlet,
    UpNextComponent,
    ContactComponent,
    AsyncPipe,
  ],
})
export class ProjectHostComponent {

  isScrolled = false;

  projectTitle$ = this.projectsService.project$.pipe(
    map((project) => project.title)
  );
  projectSubtitle$ = this.projectsService.project$.pipe(
    map((project) => project.logline)
  );

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isScrolled = scrollTop > 0;
  }

  constructor(
    private navigation: NavigationService,
    private projectsService: ProjectsService
  ) {}

  back(): void {
    this.navigation.back();
  }
}
