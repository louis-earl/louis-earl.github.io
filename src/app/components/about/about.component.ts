import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly skills = [
    'Angular',
    'TypeScript',
    'RxJS',
    'Design systems',
    'AI-assisted design + dev',
    'Figma',
    'C# .NET',
    'GitHub Actions',
  ];
}
