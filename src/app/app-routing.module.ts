import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'three', pathMatch: 'full' },
            { path: 'two', loadChildren: './two/two.module#TwoModule' },
            { path: 'three', loadChildren: './three/three.module#ThreeModule' },
            { path: 'five', loadChildren: './five/five.module#FiveModule' },
            { path: 'seven', loadChildren: './seven/seven.module#SevenModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
