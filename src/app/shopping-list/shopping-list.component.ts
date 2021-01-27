import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { HTTPService } from '../Shared/http.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(
    public shopListSrv: ShoppingListService,
    private httpSrv: HTTPService
  ) {}

  ngOnInit(): void {}

  onAddToDB(): void {
    this.httpSrv.saveToDb().subscribe((data) => {
      this.shopListSrv.clearList();
    });
  }
}
