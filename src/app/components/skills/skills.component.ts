import { Component } from '@angular/core';
import { hemisphereHumour } from 'src/app/constants/hemisphere-humour.const';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  subtitle = hemisphereHumour[Math.floor(Math.random() * hemisphereHumour.length)];
}
