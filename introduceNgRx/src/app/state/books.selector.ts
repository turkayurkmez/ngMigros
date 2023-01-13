import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../models/book.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(selectBooks, selectCollectionState,
     (books, collection) => {
          return collection.map((id) => books.find((b) => b.id === id));
     });

           //https://www.googleapis.com/books/v1/volumes?q=inauthor:Jules%20Verne