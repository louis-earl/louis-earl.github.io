import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ContentImage } from 'src/app/models/project.model';
import { ImageScrollerService } from 'src/app/services/image-scroller.service';

@Component({
  selector: 'app-image-scroller-container',
  templateUrl: './image-scroller-container.component.html',
  styleUrl: './image-scroller-container.component.scss',
  standalone: false,
})
export class ImageScrollerContainerComponent implements AfterViewInit {
  constructor(private imageScrollerService: ImageScrollerService) {}

  segmentElements: Element[] = [];

  ngAfterViewInit(): void {
    this.checkActiveImage();
    this.segmentElements = this.getSegmentElements();
    this.imageScrollerService.setActiveImage(this.getFallbackImage());
  }

  @HostListener('window:scroll')
  checkActiveImage() {
    if (this.segmentElements.length === 0) {
      return;
    }
    const activeImage = this.getIntercectingImage() || this.getFallbackImage();
    if (!activeImage) {
      console.error('No active image found.');
      return;
    }
    this.imageScrollerService.setActiveImage(activeImage);
  }

  getSegmentElements(): Element[] {
    const segmentElements = Array.from(
      document.getElementsByClassName('segment-trigger')
    );
    if (segmentElements.length === 0) {
      console.error('No segment elements found.');
    }
    return segmentElements;
  }

  getIntercectingImage(): ContentImage | null {
    const activatorHeight = window.innerHeight * 0.3;

    let activeImage: ContentImage | null = null;
    this.segmentElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < activatorHeight) {
        element.classList.add('active');
        activeImage = this.getDataFromElement(element);
      } else {
        element.classList.remove('active');
      }
    });
    return activeImage;
  }

  getFallbackImage(): ContentImage {
    const element = this.segmentElements[0];
    element.classList.add('active');
    return this.getDataFromElement(element);
  }

  getDataFromElement(element: Element): ContentImage {
    const fileName = element.getAttribute('data-file-name')!;
    const objectFit = element.getAttribute('data-object-fit')! as 'contain' | 'cover';

    return {
      fileName,
      objectFit,
    };
  }
}
