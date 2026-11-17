import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Layer {
  label: string;
  text: string;
  skills: string[];
  /** Highlighted as the layer I go deepest in. */
  primary?: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly layers: Layer[] = [
    {
      label: 'Design',
      text: 'I design to make complex work feel easy for the people doing it. I speak both “designer” and “developer”, so nothing gets lost in translation between the prototype and the final build.',
      skills: ['Figma', 'Design systems', 'AI-assisted design'],
    },
    {
      label: 'Front end',
      text: 'This is where I thrive: bringing good design to life, pixel for pixel. I love untangling legacy spaghetti into code that’s friendly for the next person (even if that’s future me at 11pm).',
      skills: ['Angular', 'TypeScript', 'RxJS', 'HTML', 'CSS/SCSS'],
      primary: true,
    },
    {
      label: 'Back end',
      text: 'Lately I’ve been following features all the way down to the API, building the C# endpoints behind the screens I design, and digging into the occasional performance optimisation.',
      skills: ['C# .NET', 'GitHub Actions'],
    },
  ];
}
