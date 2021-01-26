import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() select = new EventEmitter();

  recipes: Array<Recipe>;

  constructor() {
    this.recipes = new RecipeService().Recipes;
  }

  ngOnInit(): void {}

  onItemSelected(selectedItem: Recipe) {
    this.select.emit(selectedItem);
  }
}
