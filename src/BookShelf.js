import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// component
import BookListDetail from './BookListDetail';

const BookShelf = ({ title, books, updateBookShelf }) => {
  return (
    <Styles className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <BookListDetail key={index} book={book} updateBookShelf={updateBookShelf} />
          ))}
        </ol>
      </div>
    </Styles>
  );
};

// Add prop-types
BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;

const Styles = styled.div``;
