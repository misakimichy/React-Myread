import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// components
import BookList from './BookList';
import SearchWindow from './SearchWindow';

// util
import * as BooksAPI from '../BooksAPI';

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [bookShelf, setBookShelf] = useState([]);

  // Add data from booksAPI
  const getBooks = () => {
    BooksAPI.getAll().then(bookShelf => {
      setBookShelf(bookShelf);
    });
  };

  if (bookShelf.length === 0) getBooks();

  const searchBook = query => {
    BooksAPI.search(query).then(books => {
      if (!Array.isArray(books)) return setBooks([]);

      books.map(book => {
        let thisBookInShelf = bookShelf.find(item => item.id === book.id);
        if (thisBookInShelf) {
          book.shelf = thisBookInShelf.shelf;
          return book;
        } else {
          book.shelf = 'none';
        }
        return undefined;
      });
      setBooks(books);
    });
  };

  return (
    <>
      <Route exact path="/">
        <BookList bookShelf={bookShelf} setBooks={setBooks} books={books} />
      </Route>
      <Route path="/search">
        <SearchWindow books={books} searchBook={searchBook} setBooks={setBooks} />
      </Route>
    </>
  );
};

export default BooksApp;
