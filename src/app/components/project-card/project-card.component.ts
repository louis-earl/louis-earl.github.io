import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() link: string;
  @Input() reverseDirection: boolean;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  onProjectClick() {
    this.projectsService.openProject();
  }

}
