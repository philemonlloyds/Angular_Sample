import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected= new EventEmitter<Recipe>();

 recipes: Recipe[] = [
   new Recipe('Sushi 1','Sushi - 1 Desc','http://maxpixel.freegreatpicture.com/static/photo/1x/Real-Sushi-Raw-Sushi-Japan-Food-207244.jpg'),
   new Recipe('Sushi 2 ','Sushi - 2 Desc','https://c1.staticflickr.com/6/5172/5475990230_51c64e035f_b.jpg')
   
 ];
 
 
 constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
