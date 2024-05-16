import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-demographic',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './demographic.component.html',
  styleUrl: './demographic.component.css'
})
export class DemographicComponent {
  group: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    age: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.min(0)])
  });

  constructor() {
    this.group.controls['birthdate']?.valueChanges.subscribe(value => {
      if (value) {
        const age = this.calculateAge(new Date(value));
        this.group.controls['age']?.setValue(age);
      }
    });
  }

  calculateAge(birthdate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }
}
