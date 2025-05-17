import { Component, OnInit } from '@angular/core';
import { ContentImage } from 'src/app/models/project.model';
import { ImageScrollerService } from 'src/app/services/image-scroller.service';

@Component({
  selector: 'app-project-gallary',
  templateUrl: './project-gallary.component.html',
  styleUrls: ['./project-gallary.component.scss'],
  standalone: false,
})
export class ProjectGallaryComponent implements OnInit {
  activeImageChanges$ = this.imageScrollerService.activeImage$;
  activeImage: ContentImage | null = null;

  constructor(private imageScrollerService: ImageScrollerService) {}

  ngOnInit(): void {
    this.activeImageChanges$.subscribe((image) => {
      const img = new Image();
      img.src = '../../assets/images/' + image.fileName;
      img.onload = () => {
        this.activeImage = {
          fileName: image.fileName,
          objectFit: image.objectFit,
        };
      };
    });
  }
}
