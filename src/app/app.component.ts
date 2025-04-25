import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout/admin-layout.component';
import { ToolbarComponent } from './Layout/toolbar/toolbar.component';
import { LoginComponent } from "./component/authontication/login/login.component";
import { AuthenticatedService } from './services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, AdminLayoutComponent, RouterModule, ToolbarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Category Management System';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthenticatedService,private router: Router , private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   if (params['token']) {
    //     localStorage.setItem('token', params['token']);
        
    //   }
    // });
  }
}
