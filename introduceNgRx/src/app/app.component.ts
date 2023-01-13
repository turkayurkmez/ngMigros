import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';
import { BookApiActions, BooksActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private bookService:BooksService,
              private store:Store){

  }

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  ngOnInit(): void {
    this.bookService.getBooks()
                    .subscribe((books)=>
                                this.store.dispatch(BookApiActions.receivedBookList({books})))
                              
  }

  onAdd(bookId:string){
    this.store.dispatch(BooksActions.addBook({bookId}));
    console.log(bookId+' nolu kitap eklendi');
  } 

  onRemove(bookId:string){
    this.store.dispatch(BooksActions.removeBook({bookId}));
  }

  title = 'introduceNgRx';
}
