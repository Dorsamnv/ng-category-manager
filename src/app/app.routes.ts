import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { AuthenticatedService } from './services/authenticate.service';
import { LoginComponent } from './component/authontication/login/login.component';
import { AuthGuard } from './guard/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'base', loadChildren: () => import('./component/base/base/base.module').then(m => m.BaseModule) }
];
