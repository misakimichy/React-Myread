import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import SearchWindow from './SearchWindow';


class BooksApp extends Component {
  state = {
    books: [],
    bookshelf:[],
    query: '',
  }

  // Add API here
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then(bookshelf => {
      this.setState({ bookshelf });
    });
  }


  render() {
    // Route path '/' for main page and '/search' for search window
    return (
      <div className="app">
        <Route exact path='/' render={(props) => <BookList />}
        />
        <Route path='/search' render={(props) => <SearchWindow />}
        />
      </div>
    );
  }
}

export default BooksApp;
