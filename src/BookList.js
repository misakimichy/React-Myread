import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookList = ({ bookShelf, updateBookShelf }) => {
  const currentlyReading = bookShelf.filter(
    (book) =>
      // Debugging .filter method
      // console.log(book.shelf, book.shelf === 'Currently Reading') ||
      book.shelf === 'currentlyReading'
  );
  const wantToRead = bookShelf.filter((book) => book.shelf === 'wantToRead');
  const read = bookShelf.filter((book) => book.shelf === 'read');

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          title={'Currently Reading'}
          books={currentlyReading}
          updateBookShelf={updateBookShelf}
        />
        <BookShelf title={'Want to Read'} books={wantToRead} updateBookShelf={updateBookShelf} />
        <BookShelf title={'Read'} books={read} updateBookShelf={updateBookShelf} />
      </div>
      <div className="open-search">
        <Link to="/search">Add book</Link>
      </div>
    </div>
  );
};

// Add prop-types
BookList.propTypes = {
  bookShelf: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookList;
