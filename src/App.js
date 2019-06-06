import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import SearchWindow from './SearchWindow';


class BooksApp extends Component {
  state = {
    books: [],
    bookShelf:[],
    query: '',
  }

  // Add API here
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then(bookShelf => {
      this.setState({ bookShelf });
    });
  }

  searchBook = query => {
    BooksAPI.search(query).then(books => {
      if(!Array.isArray(books))
        books = [];
        const bookShelf = this.state.bookShelf;
        books.map(book => {
          let bookInShelf = bookShelf.find(item => item.id === book.id);
          if(bookInShelf)
            book.shelf = bookInShelf.shelf;
            return book;
        });
        this.setState({ books, query });
    });
  }

  updateBookShelf = (book, shelf) => {
    if(book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(response => {
        book.shelf = shelf;
        this.getBooks();
        this.setState(state => ({
          books: state.books.filter(book => book.id !== book.id.concat([book]))
        }));
      });
    }
  }

  // Clear the search bar
  clearSearchWindow = () => {
    this.setState({ book: [] });
  }

  render() {
    // Route path '/' for main page and '/search' for search window
    // Pass props to a component rendered by React Router:
    // https://tylermcginnis.com/react-router-pass-props-to-components/
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() =>
            <BookList
              bookShelf={this.state.bookShelf}
              updateBookShelf={(book, shelf) => {this.updateBookShelf(book, shelf);}}
            />
          }
        />
        <Route
          path='/search'
          render={() =>
            <SearchWindow
              books={this.state.books}
              searchBook={query => {this.searchBook(query);}}
              updateBookShelf={(book, shelf) =>{this.updateBookShelf(book, shelf);}}
              clearSearchWindow={() => {this.clearSearchWindow();}}
            />
          }
        />
      </div>
    );
  }
}

export default BooksApp;
