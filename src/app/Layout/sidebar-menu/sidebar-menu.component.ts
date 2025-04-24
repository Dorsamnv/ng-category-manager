import { Component } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  imports: [RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  menuItems:MenuItem[] = [
   new MenuItem(1,"Dashboard",'dashboard',[]),
   new MenuItem(2,"Base Information",'base',[
    new MenuItem(3,"Category",'base/category',[]),
    new MenuItem(4,"City List",'base/city',[]),
   ]),]
   


 getTrackById(index:number, item:MenuItem){
   return `${index}-${item.id}`;
 }
  
}
