import { Component, Input, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Recipe } from '../recipe-list/recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;

  constructor(public shopListSrv: ShoppingListService) {}

  ngOnInit(): void {}

  onAddToShoplist(ingreds: MatListOption[]) {
    ingreds.forEach((ing) => this.shopListSrv.addIngredient(ing.value));
  }
}
