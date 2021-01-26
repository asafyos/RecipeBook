import { Component, OnInit, Injector } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shopListSrv!: ShoppingListService;

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.shopListSrv = this.injector.get(ShoppingListService);
  }
}
