import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _isOverlayOpen = new BehaviorSubject<boolean>(false);
  public isOverlayOpen$ = this._isOverlayOpen.asObservable();

  constructor() { }

  public openProject() {
    console.log('open project clicked')
    this._isOverlayOpen.next(true);
  }

  public closeProject() {
    this._isOverlayOpen.next(false);
  }

}
