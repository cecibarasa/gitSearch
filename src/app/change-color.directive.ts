import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private elem: ElementRef) { }
    @Input() changeColor: string
  @HostListener('click') onClick(){
    this.textDeco('black');
  }
    @HostListener('click') Click(){
      this.textDeco('none');
}
private textDeco(color:string) {
  this.elem.nativeElement.style.background = this.changeColor;

}
}
