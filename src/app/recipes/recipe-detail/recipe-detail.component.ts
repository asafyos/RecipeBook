import { Component, Input, OnInit, Injector } from '@angular/core';
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
  shopListSrv!: ShoppingListService;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.shopListSrv = this.injector.get(ShoppingListService);
  }

  onAddToShoplist(ingreds: MatListOption[]) {
    ingreds.forEach((ing) => this.shopListSrv.addIngredient(ing.value));
  }
}
