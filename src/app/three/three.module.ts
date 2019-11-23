import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { EntryThreeComponent } from './entry-three/entry-three.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ThreeRoutingModule } from './three-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        EntryThreeComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [ThreeRoutingModule, SharedModule]
})
export class ThreeModule {
    constructor() {
        console.log('ThreeModule loaded.');
    }
}
