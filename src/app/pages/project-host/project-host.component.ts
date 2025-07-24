import { Component, HostListener } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { map } from 'rxjs/operators';
import { NavigationService } from 'src/app/services/navigation.service';
import { ImageScrollerService } from 'src/app/services/image-scroller.service';
import { ProjectGalleryComponent } from '../../components/project-gallery/project-gallery.component';
import { RouterOutlet } from '@angular/router';
import { UpNextComponent } from '../../components/up-next/up-next.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-host',
  templateUrl: './project-host.component.html',
  styleUrls: ['./project-host.component.scss'],
  imports: [
    ProjectGalleryComponent,
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
    const el = document.getElementById('scroll-anchor');
    if (!el) return;

    const top = el.getBoundingClientRect().top;
    this.isScrolled = top <= 80;
  }

  constructor(
    private navigation: NavigationService,
    private projectsService: ProjectsService
  ) {}

  back(): void {
    this.navigation.back();
  }
}
