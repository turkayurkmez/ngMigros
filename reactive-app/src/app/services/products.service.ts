import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor() { }
  getProducts():Observable<Product[]>{
    return of(products);
  }
}

const products: Product[] = [
  new Product(1, 'Test',10,0.25),
  new Product(2, 'Test',30,0.15),
  new Product(3, 'Test',50,0.20),
  new Product(4, 'Test',100,0.25),

]
