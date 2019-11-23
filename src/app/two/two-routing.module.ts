import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EntryTwoComponent } from './entry-two/entry-two.component';

const routes: Routes = [
    {
        path: '',
        component: EntryTwoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TwoRoutingModule {
    constructor() {
        console.log('TwoRoutingModule loaded.');
    }
}
