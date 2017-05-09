import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
   new Recipe(
     'Sushi 1',
     'Sushi - 1 Desc',
     'http://maxpixel.freegreatpicture.com/static/photo/1x/Real-Sushi-Raw-Sushi-Japan-Food-207244.jpg',
     [
       new Ingredient('FISH',5),
       new Ingredient('Green',2)
     ]),
   
   new Recipe
   ('Sushi 2 '
   ,'Sushi - 2 Desc'
   ,'https://c1.staticflickr.com/6/5172/5475990230_51c64e035f_b.jpg',
   [
     new Ingredient('Fish',6),
     new Ingredient('Green',2)
   ])
 ];

constructor( private slService: ShoppingListService ){}
 
 addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
 }

 getRecipes() {
     return this.recipes.slice();
 }
}