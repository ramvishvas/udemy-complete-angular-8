import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
		new Recipe(
			'A Test Recipes',
			'This is simply a test',
			'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps754_HR143571D09_16_5b.jpg'
		)
	];
  constructor() { }

  ngOnInit() {
  }

}
