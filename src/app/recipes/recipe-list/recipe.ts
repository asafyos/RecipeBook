import { Ingredient } from "src/app/Shared/ingredient";

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Array<Ingredient>;

  constructor(name: string, desc: string, imgPath: string, ingedient?: Array<Ingredient>) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingredients = ingedient || [];
  }
}
