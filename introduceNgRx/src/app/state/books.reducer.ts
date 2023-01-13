import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book.model";
import { BookApiActions } from "./books.actions";
export const initialState : ReadonlyArray<Book> = [];

//reducer: state'i değiştirecek action'ları bir arada tutan ve yöneten fonksiyonlar:
export const booksReducer = createReducer(initialState,
    on(BookApiActions.receivedBookList,(_state, {books})=> books)
);