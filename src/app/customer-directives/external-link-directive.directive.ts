import { Directive, HostBinding, Input, Inject, PLATFORM_ID } from '@angular/core';

// @Directive({
//   selector: '[appExternalLinkDirective]'
// })
@Directive({
  selector: 'a[href]'
})
export class ExternalLinkDirectiveDirective {

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';
  @Input() href: string;

  ngOnChanges() {
    this.hrefAttr = this.href;

    if (this.isLinkExternal()) {
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    }
  }

  private isLinkExternal() {
    return !this.href.includes(location.hostname);
  }

  // this is for serve side rendering

  // private isLinkExternal() {
  //   return isPlatformBrowser(this.platformId) && !this.href.includes(location.hostname);
  // }
}
