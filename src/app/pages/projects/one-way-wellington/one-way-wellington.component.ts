import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-one-way-wellington',
  standalone: true,
  imports: [],
  templateUrl: './one-way-wellington.component.html',
  styleUrl: './one-way-wellington.component.scss'
})
export class OneWayWellingtonComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.setTitle('One Way Wellington');
    this.projectsService.setSubtitle('A spaceship building game that\'s out of this world.');
    this.projectsService.setImages(['oww-poster.jpg', 'oww-ship.jpg', 'oww-gameplay.jpg']);
  }

}
