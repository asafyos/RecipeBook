import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;

  constructor() {}

  ngOnInit(): void {}

  onSelectItem(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
