import {Component, EventEmitter, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.Component.html',
  styleUrls: ['toolbar.Component.css'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
})
export class ToolbarComponent {
  @Output() sideNavToggle = new EventEmitter()
constructor(private router: Router){}
  toggle(){
    this.sideNavToggle.emit()
  }
  logout(){
    console.log('logout')
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
