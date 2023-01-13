import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';
import { Product } from './models/product';
import { ProductsService } from './services/products.service';


const subject = new BehaviorSubject(500);
subject.subscribe(console.log);

subject.next(465);
subject.next(555);
subject.next(999);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  title = 'reactive-app';

  //observable:
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next()
    }, 2000);
  });

  constructor(private productsService: ProductsService) {
    //this.changeTitle(this.setTitle)
    //this.onComplete().then(this.setTitle);
    this.title$.subscribe(this.setTitle);
    const values = of(4, 5, 6);
    // let square = map((value:number) => value * value);
    // let squaredNums = square(values);
    // squaredNums.subscribe(value=>console.log(value));

    values.pipe(
      filter((n: number) => n % 2 == 1),
      map(x => x * x)
    )
      .subscribe(p => console.log(p));


  }

  products: Product[] = [];

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(p => p.map(x => {
        x.discountedPrice = x.price * (1 - x.discountRate);
        this.products.push(x);
      }

      ))
      ;

  }

  private setTitle = () => {
    const timeStamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timeStamp})`;
  }
  //callback:
  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }
  //promise
  private onComplete() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }




}
