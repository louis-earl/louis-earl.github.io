import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-layer-stack',
  templateUrl: './layer-stack.component.html',
  styleUrl: './layer-stack.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(pointermove)': 'onPointerMove($event)',
    '(pointerleave)': 'resetTilt()',
  },
})
export class LayerStackComponent {
  readonly exploded = signal(true);
  private readonly tilt = signal({ x: 0, y: 0 });

  readonly stackTransform = computed(() => {
    const { x, y } = this.tilt();
    return `rotateX(${56 - y * 10}deg) rotateZ(${-42 + x * 14}deg)`;
  });
  readonly middleOffset = computed(() => (this.exploded() ? 80 : 12));
  readonly topOffset = computed(() => (this.exploded() ? 160 : 24));

  toggle(): void {
    this.exploded.update((value) => !value);
  }

  onPointerMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.tilt.set({
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((event.clientY - rect.top) / rect.height) * 2 - 1,
    });
  }

  resetTilt(): void {
    this.tilt.set({ x: 0, y: 0 });
  }
}
