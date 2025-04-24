import { Component,OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sample',
  imports: [CommonModule, MatSidenavModule, MatButtonModule,MatCheckboxModule,MatSliderModule, MatCardModule,FormsModule,MatRadioModule, RouterModule],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
