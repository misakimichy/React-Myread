import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import BookShelf from './BookShelf';

import { colors } from '../styles/Theme';
import AddIcon from '../icons/AddIcon.js'

const BookList = ({ bookShelf, setBooks, books }) => {
  const currentlyReading = bookShelf.filter(book => book.shelf === 'currentlyReading');
  const wantToRead = bookShelf.filter(book => book.shelf === 'wantToRead');
  const read = bookShelf.filter(book => book.shelf === 'read');

  return (
    <Styles className="list-books">
      <h1>My bookshelf</h1>
      <Link to="/search" className='search'>
        <AddIcon />
      </Link>
      <BookShelf
        title='Currently Reading'
        books={currentlyReading}
        setBooks={setBooks}
      />
      <BookShelf
        title='Want to Read'
        books={wantToRead}
        setBooks={setBooks}
      />
      <BookShelf
        title='Read'
        books={read}
        setBooks={setBooks}
      />
    </Styles>
  );
};

export default BookList;

const Styles = styled.div`
  position: relative;

  .search {
    position: fixed;
    right: 25px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    box-shadow: ${colors.boxShadow};

    width: 55px;
    height: 55px;
    outline: 0;
    z-index: 1;
    
    svg {
      width: 35px;
      height: 35px;

      fill: ${colors.navy};

      cursor: pointer;
    }
  }
`;