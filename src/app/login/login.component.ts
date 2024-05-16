import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  group: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(100)
    ]),
  });

  onSubmit() {
    if (this.group.valid) {
      console.log('Form Submitted', this.group.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get email() {
    return this.group.get('email');
  }

  get password() {
    return this.group.get('password');
  }
}
