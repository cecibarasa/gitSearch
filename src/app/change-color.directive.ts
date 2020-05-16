import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    this.changeColor('red');
  }
  @HostListener('click') foo(){
    alert('Host Element is clicked');
    this.changeColor('green');
}
changeColor(color: string){
  this.element.nativeElement.style.textColor=this.changeColor;  
}

}
