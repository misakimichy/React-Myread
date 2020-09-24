import React from 'react';
import styled from 'styled-components';

// component
import BookListDetail from './BookListDetail';

import { colors } from '../styles/Theme';

const BookShelf = ({ title, books, setBooks }) => (
  <Styles>
    <h2>{title}</h2>
    <div className="books-container">
      {books.map(book => (
        <BookListDetail
          key={book.title}
          book={book}
          setBooks={setBooks}
          books={books}
        />
      ))}
    </div>
  </Styles>
);

export default BookShelf;

const Styles = styled.div`
  h2 {
    border-bottom: 1px solid ${colors.navy};
    width: 95%;
  }
`;
