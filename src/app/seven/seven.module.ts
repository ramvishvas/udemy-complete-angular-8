import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SevenRoutingModule } from './seven-routing.module';
import { EntrySevenComponent } from './entry-seven/entry-seven.component';
import { HeaderSevenComponent } from './header-seven/header-seven.component';
import { TheorySevenComponent } from './theory-seven/theory-seven.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { DemoComponent } from './demo/demo.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';



@NgModule({
  declarations: [EntrySevenComponent, HeaderSevenComponent, TheorySevenComponent, BasicHighlightDirective, DemoComponent, BetterHighlightDirective],
  imports: [
    SharedModule,
    SevenRoutingModule
  ]
})
export class SevenModule { }
