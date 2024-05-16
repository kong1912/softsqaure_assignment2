import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StructuralDirective } from './structural.directive';
import { FormsModule } from '@angular/forms';
import { AttributeDirective } from './attribute.directive';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule, StructuralDirective, FormsModule, AttributeDirective],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  name: string = '';
  myLoves: string[] = ['Ryn', 'Lisa', 'Rose', 'Jean'];
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

  onClear() {
    this.name = '';
    this.submitted = false;
  }
}
