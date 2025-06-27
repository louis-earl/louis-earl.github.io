import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
    imports: [RouterLink, NgClass]
})
export class ProjectCardComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() link: string;
  @Input() reverseDirection: boolean;

}
