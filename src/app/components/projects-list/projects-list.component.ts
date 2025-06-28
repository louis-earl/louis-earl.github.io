import { Component } from '@angular/core';
import { projects } from 'src/app/constants/projects.const';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCategories } from 'src/app/models/project.model';
import { FilterChipsComponent } from '../filter-chips/filter-chips.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  imports: [ProjectCardComponent, FilterChipsComponent],
})
export class ProjectsListComponent {
  projects = Object.values(projects);
  selectedCategory: ProjectCategories | null = null;

  constructor() {}

  onFilterChange(category: ProjectCategories | null) {
    this.selectedCategory = category;
    if (category) {
      this.projects = Object.values(projects).filter((project) =>
        project.categories.includes(category)
      );
    } else {
      this.projects = Object.values(projects);
    }
  }
}
