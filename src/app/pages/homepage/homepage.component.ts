import { Component, HostListener } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects-list/projects-list.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    imports: [HeroComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent]
})
export class HomepageComponent {

  portraitOffset = 0;
  squiggleOffset = 0;

  currentYear = new Date().getFullYear();

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event: any) {
  //   this.portraitOffset = window.scrollY / 2;
  //   this.squiggleOffset = window.scrollY / 4;
  //   document.body.style.setProperty('--scroll', (((window.scrollY/500) * -1) + 1.5).toString() + 's')
  // }

}
