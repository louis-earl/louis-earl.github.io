import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly skills = [
    'Angular 9–21',
    'RxJS + signals',
    'TypeScript',
    'Design systems',
    'Figma',
    'C# .NET · SQL',
    'GitHub Actions',
  ];
}
