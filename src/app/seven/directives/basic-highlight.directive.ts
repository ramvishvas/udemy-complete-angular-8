import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'white';
        this.elementRef.nativeElement.style.padding = '8px';
        this.elementRef.nativeElement.style.fontSize = '18px';
    }
}
