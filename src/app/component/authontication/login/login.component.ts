import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { NgClass, NgIf } from '@angular/common';
import { AuthenticatedService } from '../../../services/authenticate.service';
import { json } from 'stream/consumers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatCheckbox,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticatedService,
    private router: Router  // ✅ باید حتماً Router رو اینجا inject کنی
  ) {
    this.loginForm = this.fb.group({
      username: ['emilys', Validators.required],
      password: ['emilyspass', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = {
        username: this.loginForm.value.username.trim(),
        password: this.loginForm.value.password.trim()
      };
  
      this.authService.login(formData).subscribe({
        next: (result) => {
          console.log('Login Success:', result);
          localStorage.setItem('token', result.accessToken);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/dashboard']);
          });
          
        },
        error: (error) => {
          console.error('Login failed:', error.error?.message || error.message);
        }
      });
    }
  }
}