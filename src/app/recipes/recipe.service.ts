import { EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
   new Recipe('Sushi 1','Sushi - 1 Desc','http://maxpixel.freegreatpicture.com/static/photo/1x/Real-Sushi-Raw-Sushi-Japan-Food-207244.jpg'),
   new Recipe('Sushi 2 ','Sushi - 2 Desc','https://c1.staticflickr.com/6/5172/5475990230_51c64e035f_b.jpg')
 ];

 getRecipes() {
     return this.recipes.slice();
 }
}