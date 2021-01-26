import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() backColor: string;

  @Output() itemSelected = new EventEmitter();

  constructor() {
    this.backColor = 'white';
  }

  ngOnInit(): void {}

  onImgClick(): void {
    this.itemSelected.emit(this.recipe);
  }
}
