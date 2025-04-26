import { Routes } from '@angular/router';
import { LoginComponent } from './component/authontication/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './component/base/dashboard/dashboard.component';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout/admin-layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { 
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],  
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent }, 
      { path: 'base', loadChildren: () => import('./component/base/base/base.module').then(m => m.BaseModule) }
    ]
  }
];
