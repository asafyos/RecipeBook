import { Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients : Array<Ingredient> = [];

  constructor() { }

  public get Ingredients() : Array<Ingredient> {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient) : void {
    this.ingredients.push(ingredient);
  }

  public clearList(): void {
    this.ingredients = [];
  }

}
