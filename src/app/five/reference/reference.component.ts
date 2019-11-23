import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reference',
    templateUrl: './reference.component.html',
    styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
    referMeElement = null;
    constructor() {}

    ngOnInit() {}

    onBtnClick(referMeplease: HTMLInputElement) {
        console.log('onBtnClick: ', referMeplease);

        referMeplease.value = `Hey I'm refered by you`;

        this.referMeElement = String(referMeplease);
    }
}
