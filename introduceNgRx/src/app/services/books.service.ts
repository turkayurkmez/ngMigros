import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<ReadonlyArray<Book>>{
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:Jules%20Verne')
                          .pipe(
                            map((books:any) => books.items || [] ));
                          
  }
}
