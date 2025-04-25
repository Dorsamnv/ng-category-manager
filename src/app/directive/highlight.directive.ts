import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() appHighlight : string = "gray"

  constructor(private element:ElementRef) { 
   
     element.nativeElement.style.borderRadius ='5px'
      element.nativeElement.style.padding ='5px'
  }
 ngOnInit(){
  this.element.nativeElement.style.backgroundColor = this.appHighlight;
 }
 
 @HostListener('mouseenter') OnMouseEnter(){
  this.element.nativeElement.style.backgroundColor ="gray";
 }
 @HostListener('mouseleave') OnMouseLeave(){
  this.element.nativeElement.style.backgroundColor =this.appHighlight;
 }

}
