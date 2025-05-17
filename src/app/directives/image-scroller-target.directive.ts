import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImageScrollerTarget]',
  standalone: false,
})
export class ImageScrollerTargetDirective {
  @Input('appImageScrollerTarget') fileName = '';
  @Input() objectFit: 'contain' | 'cover';

  @HostBinding('class.segment-trigger') segmentTriggerClass = true;

  @HostBinding('attr.data-file-name') get dataFileName() {
    return this.fileName;
  }

  @HostBinding('attr.data-object-fit') get dataObjectFit() {
    return this.objectFit;
  }
}
