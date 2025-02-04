import { Component } from '@angular/core';

@Component({
  selector: 'app-expansion-content',
  templateUrl: './expansion-content.component.html',
  styleUrl: './expansion-content.component.scss'
})
export class ExpansionContentComponent {
  isOpen = false;

  expandContent() {
    this.isOpen = true;
  }

  collapseContent() {
    this.isOpen = false;
    const element = document.getElementById('anchor');
    if (!element) {
      return;
    }
    const rect = element.getBoundingClientRect();
    if (rect.top > 0) {
      return
    }
    let scrollAmount: number;
    if (window.innerHeight < rect.bottom) {
      scrollAmount = rect.top - 139;
    }
    else {
      scrollAmount = rect.top - rect.bottom + 139;
    }   

    this.scrollByY(scrollAmount, 200)
  }

  async scrollByY(y: number, time: number) {
    const start = performance.now()
    const startY = window.scrollY
    const endY = startY + y
    while (performance.now() < start + time) {
      const progress = (performance.now() - start) / time
      window.scrollTo(0, startY + y * progress)
      // wait for the next frame
      await new Promise(requestAnimationFrame)
    }
    window.scrollTo(0, endY)
  }
}
