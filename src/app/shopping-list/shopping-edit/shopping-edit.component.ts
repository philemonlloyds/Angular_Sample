import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

import { Ingredient }  from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;
//  @Output() ingredientAdded = new EventEmitter<Ingredient>();

 showDelete = true;

  constructor(private slservice: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slservice.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

}
