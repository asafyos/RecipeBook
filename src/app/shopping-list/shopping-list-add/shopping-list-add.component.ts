import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css'],
})
export class ShoppingListAddComponent implements OnInit {
  listItemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(public shopListSrv: ShoppingListService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.shopListSrv.addIngredient(this.listItemForm.value);
    this.listItemForm.setValue({ name: '', amount: '' });
  }
}
