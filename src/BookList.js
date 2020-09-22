import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import BookShelf from './BookShelf';

import { colors } from './styles/Theme';

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
    <Styles className="list-books">
      <h1>My bookshelf</h1>
      <BookShelf
        title='Currently Reading'
        books={currentlyReading}
        updateBookShelf={updateBookShelf}
      />
      <BookShelf title='Want to Read' books={wantToRead} updateBookShelf={updateBookShelf} />
      <BookShelf title='Read' books={read} updateBookShelf={updateBookShelf} />


      <Link to="/search" className='search'>
        <button className="open-search" />
      </Link>
    </Styles>
  );
};

// Add prop-types
BookList.propTypes = {
  bookShelf: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookList;

const Styles = styled.div`
  position: relative;

  .search {
    position: fixed;
    right: 25px;
    bottom: 25px;

    display: block;
    border-radius: 50%;
    box-shadow: ${colors.boxShadow};
    background: ${colors.navy} url('./icons/add.svg') no-repeat center;
    background-size: 28px;

    width: 50px;
    height: 50px;
    outline: 0;
    
    .open-search {
      border: 1px solid ${colors.navy};
      border-radius: 50%;
      width: 100%;
      height: 100%;

      cursor: pointer;
    }
  }
`;