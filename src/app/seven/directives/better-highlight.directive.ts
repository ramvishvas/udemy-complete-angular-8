import {
    Directive,
    Renderer2,
    OnInit,
    ElementRef,
    HostListener,
    HostBinding,
    Input
} from "@angular/core";

@Directive({
    selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener("mouseenter") mouseover(eventData: Event) {
        console.log("mouseenter: ", eventData);
        this.backgroundColor = this.highlightColor;
    }

    @HostListener("mouseleave") mouseleave(eventData: Event) {
        console.log("mouseleave: ", eventData);
        this.backgroundColor = this.defaultColor;
    }


    // before lacture 97
    // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    // ngOnInit(): void {
    //     this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "red");
    // }

    // @HostListener("mouseenter") mouseover(eventData: Event) {
    //     console.log("mouseenter: ", eventData);
    //     this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    // }

    // @HostListener("mouseleave") mouseleave(eventData: Event) {
    //     console.log("mouseleave: ", eventData);
    //     this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    // }
}
