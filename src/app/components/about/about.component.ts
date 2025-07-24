import { Component } from '@angular/core';
import { ProjectGalleryComponent } from '../project-gallery/project-gallery.component';
import { ImageScrollerContainerComponent } from '../image-scroller-container/image-scroller-container.component';
import { ImageScrollerTargetDirective } from '../../directives/image-scroller-target.directive';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [
        ProjectGalleryComponent,
        ImageScrollerContainerComponent,
        ImageScrollerTargetDirective,
    ],
})
export class AboutComponent {

}
