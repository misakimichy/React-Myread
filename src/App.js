import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BookList from './BookList';
import SearchWindow from './SearchWindow';


const BooksApp = () => {
  // Route path '/' for main page and '/search' for search window
  return (
    <div className="app">
      <Route exact path='/' component={BookList}/>
      <Route path='search' component={SearchWindow} />
    </div>
  );
}

export default BooksApp;
