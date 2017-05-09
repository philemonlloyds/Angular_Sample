import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
//  @Input() ingredient: Ingredient;
//  @Output() ingredientSelected= new EventEmitter<Ingredient>();

ingredients: Ingredient[];

constructor(private slservice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slservice.getIngredients();
  }

  
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  onItemSelected(ingredient: Ingredient){
      // this.ingredientSelected.emit(ingredient);
  }

}
