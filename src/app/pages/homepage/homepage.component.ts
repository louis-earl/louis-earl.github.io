import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  portraitOffset = 0;

  onWindowScroll($event: any) {
    this.portraitOffset = $event.target.scrollTop / 2.5;
  }
}
