import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
    standalone: false
})
export class ProjectCardComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() link: string;
  @Input() reverseDirection: boolean;

}
