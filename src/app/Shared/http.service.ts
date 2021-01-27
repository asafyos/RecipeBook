import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {

  constructor(public shopListSrv: ShoppingListService, private http: HttpClient) {
  }

  saveToDb() {
   return this.http
      .put(
        'https://recipebook-b27ad-default-rtdb.firebaseio.com/ing.json',
        this.shopListSrv.Ingredients
      );
  }

}
