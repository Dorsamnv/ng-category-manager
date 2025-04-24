import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
   }
  filterEventSource(event:any) {
    event.subscribe(this.reloadData)
  }
  reloadData(event:any) {
    console.log(event)
  }
}