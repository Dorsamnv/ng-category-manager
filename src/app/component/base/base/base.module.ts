import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';
import { CityListComponent } from './city/city-list/citylist/city-list.component';
import { CategoryInfoComponent } from './category/category-info/category-info/category-info.component';
import { SampleComponent } from '../sample/sample.component';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    CityListComponent,
    CategoryInfoComponent,
    SampleComponent
  ]
})
export class BaseModule { }
