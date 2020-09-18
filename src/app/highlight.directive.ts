import { rendererTypeName } from '@angular/compiler';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef, renderer: Renderer2) 
  { 
    renderer.setStyle(el.nativeElement, 'color', 'blue')
  }

}
