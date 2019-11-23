import { FiveRoutingModule } from './five-routing.module';
import { SharedModule } from './../shared/shared.module';
import { EntryFiveComponent } from './entry-five/entry-five.component';
import { NgModule } from '@angular/core';
import { HeaderFiveComponent } from './header-five/header-five.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { HooksComponent } from './hooks/hooks.component';
import { ReferenceComponent } from './reference/reference.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContentComponent } from './ng-content/content/content.component';

@NgModule({
    declarations: [EntryFiveComponent, HeaderFiveComponent, EncapsulationComponent, HooksComponent, ReferenceComponent, ViewchildComponent, NgContentComponent, ContentComponent],
    imports: [SharedModule, FiveRoutingModule]
})
export class FiveModule {}
