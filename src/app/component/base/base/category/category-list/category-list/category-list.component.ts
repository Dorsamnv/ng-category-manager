import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../../services/base/category.service';
import { Category } from '../../../../../../models/base/Category';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-category-list',
  imports: [RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: Category[] =[]
  constructor(private categoryService: CategoryService){}
 ngOnInit(): void {
  this.categoryService.getAll().subscribe(result => {
    this.categories = result
  })
 }
}
