import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// component
import BookListDetail from './BookListDetail';

const BookShelf = ({ title, books, updateBookShelf }) => (
  <Styles>
    <h2>{title}</h2>
    <div className="books-container">
      {books.map(book => (
        <BookListDetail key={book.title} book={book} updateBookShelf={updateBookShelf} />
      ))}
    </div>
  </Styles>
);

// Add prop-types
BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;

const Styles = styled.div``;
