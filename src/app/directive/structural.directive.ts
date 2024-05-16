import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() appStructural!: string;
  @Input() appStructuralActivated!: boolean;

  ngOnChanges() {
    if (this.appStructuralActivated && this.appStructural && this.appStructural.trim() !== '') {
      const text = this.appStructural.trim().toLowerCase();
      const message = text === 'ryn' ? 'You are right, my love is Ryn' : 'You are wrong, my love is Ryn';
      this.viewContainer.clear();
      const embeddedView = this.viewContainer.createEmbeddedView(this.templateRef);
      embeddedView.rootNodes[0].textContent = message;
    } else {
      this.viewContainer.clear();
    }
  }
}
