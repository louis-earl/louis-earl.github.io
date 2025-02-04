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
  }
}
