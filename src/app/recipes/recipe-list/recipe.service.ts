import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes = [
    new Recipe(
      'Pasta',
      'Yummy Pasta',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/26/2/WU0806H_Pasta-with-Tomato-Cream-Sauce_s4x3.jpg.rend.hgtvcom.826.620.suffix/1440693433023.jpeg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Tomato', 3),
        new Ingredient('Salt', 1),
        new Ingredient('Paper', 1),
        new Ingredient('Basil', 1),
      ]
    ),
    new Recipe(
      'Sushi',
      'Yummy Shusi',
      'https://media-cdn.tripadvisor.com/media/photo-s/17/5b/c8/d0/shinsen.jpg',
      [
        new Ingredient('Tuna Fish', 1),
        new Ingredient('Rice', 1),
        new Ingredient('Nuri Weed', 1),
        new Ingredient('Cucamber', 1),
        new Ingredient('Carrot', 1),
      ]
    ),
    new Recipe(
      'Pasta',
      'Yummy Pasta',
      'https://4.bp.blogspot.com/-RjhGTGbUBEk/TgHbdYPvPtI/AAAAAAAADc0/E4zNN261-fA/s1600/53.jpg',
      [
        new Ingredient('Tomato Souce', 1),
        new Ingredient('Mozzarella', 1),
        new Ingredient('Flour', 1),
        new Ingredient('Water', 1),
        new Ingredient('Olive', 25),
      ]
    ),
  ];

  constructor() {}

  public get Recipes(): Array<Recipe> {
    return this.recipes.splice(0);
  }
}
