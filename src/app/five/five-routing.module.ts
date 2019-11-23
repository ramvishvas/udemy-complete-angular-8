import { NgContentComponent } from './ng-content/ng-content.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ReferenceComponent } from './reference/reference.component';
import { HooksComponent } from './hooks/hooks.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { EntryFiveComponent } from './entry-five/entry-five.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: EntryFiveComponent,
        children: [
            { path: '', redirectTo: 'encapsulation', pathMatch: 'full' },
            { path: 'encapsulation', component: EncapsulationComponent },
            { path: 'reference', component: ReferenceComponent },
            { path: 'viewchild', component: ViewchildComponent },
            { path: 'ng-content', component: NgContentComponent },
            { path: 'hooks', component: HooksComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FiveRoutingModule {}
