import { EntryThreeComponent } from './entry-three/entry-three.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: EntryThreeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThreeRoutingModule {
    constructor() {
        console.log('ThreeRoutingModule loaded.');
    }
}
