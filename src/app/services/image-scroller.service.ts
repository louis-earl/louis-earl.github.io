import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ContentImage } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ImageScrollerService {
  private _activeImage = new ReplaySubject<ContentImage>();
  public activeImage$ = this._activeImage.asObservable();

  public setActiveImage(image: ContentImage) {
    this._activeImage.next(image);
  }
}
