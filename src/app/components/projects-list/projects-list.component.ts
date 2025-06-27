import { Component } from '@angular/core';
import { projects } from 'src/app/constants/projects.const';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectCategories } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  imports: [ProjectCardComponent, MatChipsModule],
})
export class ProjectsListComponent {
  projects = Object.values(projects);
  projectCategories = Object.values(ProjectCategories);
  selectedCategory: ProjectCategories | null = null;

  constructor() {}

  onFilterChange(category: MatChipListboxChange) {
    this.selectedCategory = category.value;
    if (category.value) {
      this.projects = Object.values(projects).filter((project) =>
        project.categories.includes(category.value)
      );
    } else {
      this.projects = Object.values(projects);
    }
  }
}
