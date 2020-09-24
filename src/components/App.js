import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// components
import BookList from './BookList';
import SearchWindow from './SearchWindow';

// util
import * as BooksAPI from '../BooksAPI';

const BooksApp = () => {
  const [books, setBooks ] = useState([]);
  const [bookShelf, setBookShelf] = useState([]);

  // Add data from booksAPI
  const getBooks = () => {
    BooksAPI.getAll().then((bookShelf) => {
      setBookShelf(bookShelf);
    });
  };

  if(bookShelf.length === 0) getBooks();

  const searchBook = (query) => {
    BooksAPI.search(query).then((books) => {
      if (!Array.isArray(books)) books = [];
      books.map((book) => {
        let thisBookInShelf = bookShelf.find((item) => item.id === book.id);
        if (thisBookInShelf) {
          book.shelf = thisBookInShelf.shelf;
          return book;
        } else {
          book.shelf = 'none';
        }
      });
      setBooks(books);
    });
  };

  // Route path '/' for main page and '/search' for search window
  // Pass props to a component rendered by React Router:
  // https://tylermcginnis.com/react-router-pass-props-to-components/
  return (
    <Styles>
      <Route exact
        path="/"
        render={() => (
          <BookList
            bookShelf={bookShelf}
            setBooks={setBooks}
            books={books}
          />
        )}
      />
      <Route
        path="/search"
        render={() => (
          <SearchWindow
            books={books}
            searchBook={searchBook}
            setBooks={setBooks}
          />
        )}
      />
    </Styles>
  );
}

export default BooksApp;

const Styles = styled.div`
  padding: 0 40px;
`;
