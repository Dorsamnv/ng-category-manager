import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout/admin-layout.component';
import { ToolbarComponent } from './Layout/toolbar/toolbar.component';
@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule,AdminLayoutComponent , RouterModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-3';
}
