import { DemoComponent } from './demo/demo.component';
import { TheorySevenComponent } from './theory-seven/theory-seven.component';
import { EntrySevenComponent } from './entry-seven/entry-seven.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: EntrySevenComponent,
        children: [
            { path: '', redirectTo: 'theory', pathMatch: 'full' },
            { path: 'theory', component: TheorySevenComponent },
            { path: 'demo', component: DemoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SevenRoutingModule { }
