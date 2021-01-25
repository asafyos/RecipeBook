import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes = [
    new Recipe(
      'Pasta',
      'Yummy Pasta',
      'https://ministryofcurry.com/wp-content/uploads/2018/07/Pasta-with-Creamy-Tomato-Sauce-1.jpg'
    ),
    new Recipe(
      'Sushi',
      'Yummy Shusi',
      'https://media-cdn.tripadvisor.com/media/photo-s/17/5b/c8/d0/shinsen.jpg'
    ),
    new Recipe(
      'Pasta',
      'Yummy Pasta',
      'https://4.bp.blogspot.com/-RjhGTGbUBEk/TgHbdYPvPtI/AAAAAAAADc0/E4zNN261-fA/s1600/53.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
