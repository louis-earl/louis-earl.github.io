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
      label: '01 Design',
      text: 'I speak both “designer” and “developer”, so nothing gets lost in translation between the prototype and the final build.',
      skills: ['Figma', 'Design systems', 'AI-assisted design'],
    },
    {
      label: '02 Front end',
      text: 'This is where I thrive: turning good design into code that makes complex tasks feel effortless for the people using it. Behind the scenes, I love turning chaos into clarity, untangling legacy spaghetti into code that’s friendly for the next person (even if that’s future me at 11pm).',
      skills: ['Angular', 'TypeScript', 'RxJS'],
      primary: true,
    },
    {
      label: '03 Back end',
      text: 'Lately I’ve been following features all the way down to the API.',
      skills: ['C# .NET', 'GitHub Actions'],
    },
  ];
}
