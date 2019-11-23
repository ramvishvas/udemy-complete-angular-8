import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-viewchild',
    templateUrl: './viewchild.component.html',
    styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {
    @ViewChild('referMeplease', { static: true }) refered: ElementRef;

    referMeElement = null;

    constructor() {}

    ngOnInit() {}

    onBtnClick() {
        console.log('onBtnClick: ', this.refered);

        this.refered.nativeElement.value = 'Hey this time I\'m refered';

        this.referMeElement = this.refered;
    }
}
