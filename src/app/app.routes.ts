import { Routes } from '@angular/router';
import { DashboardComponent } from './component/base/dashboard/dashboard.component';
import { CityListComponent } from './component/base/base/city/city-list/citylist/city-list.component';
import { SampleComponent } from './component/base/sample/sample.component';
import { CategoryInfoComponent } from './component/base/base/category/category-info/category-info/category-info.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: SampleComponent },
    { path: 'base', component: CityListComponent },
    { path: 'base/category', component: CategoryInfoComponent },
    { path: 'base/city', component: CityListComponent },
    
];
