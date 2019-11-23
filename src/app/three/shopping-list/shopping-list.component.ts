import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    ingredient: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Mango', 15)];
    constructor() {}
    ngOnInit() {}
}
