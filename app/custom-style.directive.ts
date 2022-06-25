import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective 
{

    public style = 'background-color:yellow; font-style:bold';
  
  
    constructor(private eleobj : ElementRef)
   { 
    this.setcolor(this.style)
   }
   
   setcolor(color:string)
    {
      this.eleobj.nativeElement.style.cssText=color;
    }


}