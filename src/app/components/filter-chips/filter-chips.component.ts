import { Component, EventEmitter, Output } from '@angular/core';
import { ProjectCategories } from 'src/app/models/project.model';

@Component({
  selector: 'app-filter-chips',
  imports: [],
  templateUrl: './filter-chips.component.html',
  styleUrl: './filter-chips.component.scss',
})
export class FilterChipsComponent {
  @Output() categorySelected = new EventEmitter<ProjectCategories | null>();

  selectedCategory: ProjectCategories | null = null;
  projectCategories = Object.values(ProjectCategories);

  selectCategory(category: ProjectCategories | null) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
