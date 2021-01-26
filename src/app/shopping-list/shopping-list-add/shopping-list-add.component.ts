import { Component, OnInit, Injector } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css'],
})
export class ShoppingListAddComponent implements OnInit {
  shopListSrv!: ShoppingListService;
  listItemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.shopListSrv = this.injector.get(ShoppingListService);
  }

  onSubmit(): void {
    this.shopListSrv.addIngredient(this.listItemForm.value);
    this.listItemForm.setValue({ name: '', amount: '' });
  }
}
