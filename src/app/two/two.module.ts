import { NgModule } from '@angular/core';
import { EntryTwoComponent } from './entry-two/entry-two.component';
import { SharedModule } from '../shared/shared.module';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SelectorComponent } from './selector/selector.component';
import { BasicComponent } from './basic/basic.component';
import { TwoRoutingModule } from './two-routing.module';

@NgModule({
    declarations: [EntryTwoComponent, BasicComponent, SelectorComponent, SuccessAlertComponent, WarningAlertComponent],
    imports: [SharedModule, TwoRoutingModule]
})
export class TwoModule {
    constructor() {
        console.log('TwoModule loaded.');
    }
}
