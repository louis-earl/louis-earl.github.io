import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-midnight-mysteries',
  standalone: true,
  imports: [],
  templateUrl: './midnight-mysteries.component.html',
  styleUrl: './midnight-mysteries.component.scss'
})
export class MidnightMysteriesComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {

  }

  ngOnInit(): void {
    this.projectsService.setTitle('Midnight Mysteries');
    this.projectsService.setSubtitle('A multiplayer murder game');
    this.projectsService.setImages(['mm-present-1.jpg', 'mm-present-2.jpg'])
  }
}
