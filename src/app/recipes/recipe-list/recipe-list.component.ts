import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe description', 'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Cremajpg.jpg'),
    new Recipe('Test 2 Recipe', 'Test 2 Recipe description', 'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Cremajpg.jpg'),
    new Recipe('Test 3 Recipe', 'Test 3 Recipe description', 'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Cremajpg.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(EachRecipe: Recipe) {
    this.recipeWasSelected.emit(EachRecipe);
  }

}
