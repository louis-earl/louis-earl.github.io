import { Component } from '@angular/core';
import { kickers } from 'src/app/constants/kickers.const';
import { ProjectsService } from 'src/app/services/projects.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-up-next',
    templateUrl: './up-next.component.html',
    styleUrl: './up-next.component.scss',
    imports: [AsyncPipe]
})
export class UpNextComponent {
  upNext$ = this.projectsService.nextUp$
  kicker = kickers[Math.floor(Math.random()*kickers.length)];

  constructor(private readonly projectsService: ProjectsService) {}
}
