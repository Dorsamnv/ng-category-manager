import { Component, NgModule, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../../services/base/category.service';
import { Category } from '../../../../../../models/base/Category';
import { RouterModule } from '@angular/router';
import { NgModel, NgForm, NgModelGroup, NgControl, FormGroup, FormsModule} from '@angular/forms';
import { NgClass, NgComponentOutlet, NgFor } from '@angular/common';
import { filter, pipe } from 'rxjs';
@Component({
  selector: 'app-category-list',
  imports: [RouterModule, FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: Category[] =[]
  searchText: string = '';
  constructor(private categoryService: CategoryService){}
 ngOnInit(): void {
  this.categoryService.getAll().subscribe(result => {
    this.categories = result
  })
 }

 get filteredCategories() {
  if (!this.searchText) {
    return this.categories;
  }
  return this.categories.filter(category =>
    category.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
}

