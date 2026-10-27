import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type BlueprintSketchVariant = 'admin' | 'grid' | 'form';

/** A line drawing of a screen, used where real screenshots can't be shown. */
@Component({
  selector: 'app-blueprint-sketch',
  templateUrl: './blueprint-sketch.component.html',
  styleUrl: './blueprint-sketch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'blueprint',
    role: 'img',
    '[attr.aria-label]': 'label()',
  },
})
export class BlueprintSketchComponent {
  readonly variant = input.required<BlueprintSketchVariant>();
  readonly label = input.required<string>();
  readonly caption = input<string>();

  protected readonly rows = [0, 1, 2, 3, 4, 5];
}
