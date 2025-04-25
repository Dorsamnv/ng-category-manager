import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from '../sample/sample.component';
import { CityListComponent } from './city/city-list/citylist/city-list.component';
import { CategoryInfoComponent } from './category/category-info/category-info/category-info.component';
import { CategoryListComponent } from './category/category-list/category-list/category-list.component';

const routes: Routes = [
  { path: '', component: SampleComponent },
  { path: 'category/add', component: CategoryInfoComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'city', component: CityListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
