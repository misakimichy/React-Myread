import React from 'react';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import SearchWindow from './SearchWindow';


class BooksApp extends React.Component {
  state = {
    books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <BookList />
        <SearchWindow books={books} />
  
        {/*
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">1776</div>
              <div className="book-authors">David McCullough</div>
            </div>
          </li> 
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        )} */}
      </div>
    )
  }
}

export default BooksApp;
