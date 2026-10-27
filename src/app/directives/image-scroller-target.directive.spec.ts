import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ImageScrollerTargetDirective } from './image-scroller-target.directive';

describe('ImageScrollerTargetDirective', () => {
  it('should create an instance', () => {
    const directive = new ImageScrollerTargetDirective(
      TestBed.inject(BreakpointObserver),
      new ElementRef(document.createElement('div'))
    );
    expect(directive).toBeTruthy();
  });
});
