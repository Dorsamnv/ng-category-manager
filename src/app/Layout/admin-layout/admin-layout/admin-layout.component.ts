import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from "../../toolbar/toolbar.component";
import { SidebarMenuComponent } from "../../sidebar-menu/sidebar-menu.component";
import { RouterModule } from '@angular/router';
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-admin-layout',
  templateUrl: 'admin-layout.component.html',
  styleUrl: 'admin-layout.component.css',
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule, ToolbarComponent, SidebarMenuComponent, RouterModule],
})
export class AdminLayoutComponent {
 showSidenav = false;
 toggleSidebar(){
  this.showSidenav = !this.showSidenav
 }
}
