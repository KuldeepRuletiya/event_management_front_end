import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocuss]'
})
export class AutofocusDirective {

  constructor(private el: ElementRef) { }

  // ngAfterViewInit() {
  //   this.el.nativeElement.focus();
  // }

  @HostListener('document:keypress', ['$event'])
  keypress(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      console.log("eee", this.el);

      this.el.nativeElement.focus();
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 

    if(event.keyCode==13){

    }
  }


}
