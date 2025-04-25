import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DateFormatPipe } from '../../../../../../pipes/date.pipe';
import { HighlightDirective } from '../../../../../../directive/highlight.directive';

@Component({
  selector: 'app-city-list',
  imports: [RouterModule, DateFormatPipe, HighlightDirective],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  CurrentDate = new Date()
 cities =[
  {
    cityName:"Tehran",
    cityId:1
  },
  {
    cityName:"New York " ,
    cityId:2
  },
  {
    cityName:"London",
    cityId:3
  },
  {
    cityName:"Los Angeles ",
    cityId:4
  },
 ]

 getTrackById(index:number,city:any){
  return city.cityId
 }

}
