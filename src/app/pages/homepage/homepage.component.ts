import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  portraitOffset = 0;
  squiggleOffset = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    this.portraitOffset = window.scrollY / 2;
    this.squiggleOffset = window.scrollY / 4;
  }
}
