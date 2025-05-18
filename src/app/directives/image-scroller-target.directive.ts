import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Directive,
  Input,
  HostBinding,
  ElementRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appImageScrollerTarget]',
  standalone: false,
})
export class ImageScrollerTargetDirective implements OnInit {
  @Input('appImageScrollerTarget') fileName = '';
  @Input() objectFit: 'contain' | 'cover';

  @HostBinding('class.segment-trigger') segmentTriggerClass = true;

  @HostBinding('attr.data-file-name') get dataFileName() {
    return this.fileName;
  }

  @HostBinding('attr.data-object-fit') get dataObjectFit() {
    return this.objectFit;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private hostElement: ElementRef
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        if (result.matches) {
          this.removeImageIfExists();

          const el = document.createElement('img');
          el.src = '../../assets/images/' + this.fileName;
          el.style.objectFit = this.objectFit;
          el.classList.add('inserted-image');
          this.hostElement.nativeElement.prepend(el);
        } else {
          this.removeImageIfExists();
        }
      });
  }

  removeImageIfExists() {
    const insertedImage =
      this.hostElement.nativeElement.querySelector('.inserted-image');
    if (insertedImage) {
      this.hostElement.nativeElement.removeChild(insertedImage);
    }
  }
}
