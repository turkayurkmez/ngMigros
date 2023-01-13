import { createActionGroup } from "@ngrx/store";
import { props } from "@ngrx/store";
import { Book } from "../models/book.model";

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ bookId: string }>(),
        'Remove Book': props<{ bookId: string }>()
    }
});

export const BookApiActions = createActionGroup({
    source: 'Books API',
    events:{
        'Received Book List': props<{books: ReadonlyArray<Book>}>()
        }
})

