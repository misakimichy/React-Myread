import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// components
import BookList from './BookList';
import SearchWindow from './SearchWindow';

// util
import * as BooksAPI from '../BooksAPI';

class BooksApp extends Component {
  state = {
    books: [],
    bookShelf: [],
  };

  // Add API here
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((bookShelf) => {
      this.setState({ bookShelf });
    });
  };

  searchBook = (query) => {
    BooksAPI.search(query).then((books) => {
      if (!Array.isArray(books)) books = [];
      const bookShelf = this.state.bookShelf;
      books.map((book) => {
        let bookInShelf = bookShelf.find((item) => item.id === book.id);
        if (bookInShelf) {
          book.shelf = bookInShelf.shelf;
          return book;
        } else {
          book.shelf = 'none';
        }
      });
      this.setState({ books: books });
    });
  };

  updateBookShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then((response) => {
        book.shelf = shelf;
        this.getBooks();
        this.setState((state) => ({
          books: state.books.filter((thisBook) => thisBook.id !== book.id).concat([book]),
        }));
      });
    }
  };

  // Clear the search bar
  clearSearchWindow = () => {
    this.setState({ book: [] });
  };

  render() {
    // Route path '/' for main page and '/search' for search window
    // Pass props to a component rendered by React Router:
    // https://tylermcginnis.com/react-router-pass-props-to-components/
    const { bookShelf, books } = this.state;

    return (
      <Styles>
        <Route exact
          path="/"
          render={() => (
            <BookList
              bookShelf={bookShelf}
              updateBookShelf={(book, shelf) => {
                this.updateBookShelf(book, shelf);
              }}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchWindow
              books={books}
              searchBook={(query) => {
                this.searchBook(query);
              }}
              updateBookShelf={(book, shelf) => {
                this.updateBookShelf(book, shelf);
              }}
              clearSearchWindow={() => {
                this.clearSearchWindow();
              }}
            />
          )}
        />
      </Styles>
    );
  }
}

export default BooksApp;

const Styles = styled.div`
  padding: 0 40px;
`;
