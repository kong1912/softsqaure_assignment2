import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttribute]',
  standalone: true
})
export class AttributeDirective {

  @Input() appAttribute !: string;
  
  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.checkName();
  }


  private checkName() {
    if (this.appAttribute.toLowerCase() === 'ryn') {
      this.correct();
    } else {
      this.wrong();
    }
  }

  private correct() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  private wrong() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  // private deactivate() {
  //   this.el.nativeElement.style.backgroundColor = '';
  // }

}
