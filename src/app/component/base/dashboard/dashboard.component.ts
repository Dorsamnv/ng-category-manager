import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from '../base/category/category-list/category-list/category-list.component';
import { CategoryInfoComponent } from '../base/category/category-info/category-info/category-info.component';
import { CategoryService } from '../../../services/base/category.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

}
