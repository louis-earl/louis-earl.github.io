import { Component, OnInit, signal } from '@angular/core';
import { ContentImage } from 'src/app/models/project.model';
import { ImageScrollerService } from 'src/app/services/image-scroller.service';

@Component({
    selector: 'app-project-gallery',
    templateUrl: './project-gallery.component.html',
    styleUrls: ['./project-gallery.component.scss'],
})
export class ProjectGalleryComponent implements OnInit {
  activeImageChanges$ = this.imageScrollerService.activeImage$;
  // A signal, so the image load callback (outside any template event) still refreshes the view.
  activeImage = signal<ContentImage | null>(null);

  constructor(private imageScrollerService: ImageScrollerService) {}

  ngOnInit(): void {
    this.activeImageChanges$.subscribe((image) => {
      const img = new Image();
      img.src = '../../assets/images/' + image.fileName;
      img.onload = () => {
        this.activeImage.set({
          fileName: image.fileName,
          objectFit: image.objectFit,
        });
      };
    });
  }
}
