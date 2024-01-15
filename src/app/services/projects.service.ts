import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _projectTitle = new Subject<string>();
  public projectTitle$ = this._projectTitle.asObservable();

  private _projectSubtitle = new Subject<string>();
  public projectSubtitle$ = this._projectSubtitle.asObservable();

  private _activeIndex = new BehaviorSubject<number>(0);
  public activeIndex$ = this._activeIndex.asObservable();

  private _images = new BehaviorSubject<string[]>([]);
  public images$ = this._images.asObservable();

  constructor() { }

  public setTitle(title: string) {
    this._projectTitle.next(title);
  }

  public setSubtitle(subtitle: string) {
    this._projectSubtitle.next(subtitle);
  }

  public setActiveIndex(index: number) {
    this._activeIndex.next(index);
  }

  public setImages(images: string[]) {
    this._images.next(images)
  }
}
