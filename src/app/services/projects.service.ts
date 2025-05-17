import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Project, ProjectNames } from '../models/project.model';
import { projects } from '../constants/projects.const';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _project = new ReplaySubject<Project>();
  public project$ = this._project.asObservable();

  private _nextUp = new ReplaySubject<Project>();
  public nextUp$ = this._nextUp.asObservable();

  public setProject(projectName: ProjectNames) {
    const project = projects[projectName];
    this._project.next(project);

    const nextUp = projects[project.nextUp];
    this._nextUp.next(nextUp);
  }
}
