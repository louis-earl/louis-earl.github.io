import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-off-the-clock',
  templateUrl: './off-the-clock.component.html',
  styleUrls: ['./off-the-clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffTheClockComponent {}
