import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { MaterialModule } from '../../../../modules/material.modules';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-info',
  imports:[MaterialModule,CommonModule,JsonPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css'],
})
export class CategoryInfoComponent {
  formGroup!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    let emailregex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      categoryName: [],
      email: [
        'andrei88_fcd@yahoo.com',
        [Validators.required, Validators.pattern(emailregex)],
        this.checkInUseEmail,
      ],
      description: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      validate: '',
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate')?.valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup
          .get('name')
          ?.setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = 'You need to specify at least 3 characters';
      } else {
        this.formGroup.get('name')?.setValidators(Validators.required);
      }
      this.formGroup.get('name')?.updateValueAndValidity();
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  checkInUseEmail(control:any) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable((observer) => {
      setTimeout(() => {
        let result =
          db.indexOf(control.value) !== -1 ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  getErrorEmail() {
    return this.formGroup.get('categoryName')?.hasError('required')
      ? 'Field is required'
      : this.formGroup.get('categoryName')?.hasError('pattern')
      ? 'Not a valid emailaddress'
      : this.formGroup.get('categoryName')?.hasError('alreadyInUse');
  }

  onSubmit(post:any) {
    this.post = post;
  }
}
