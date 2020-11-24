import React, { useState } from 'react';
import styled from 'styled-components';

// theme
import { colors } from '../styles/Theme';
import ArrowDropdown from '../icons/ArrowDropdown';

// util
import * as BooksAPI from '../BooksAPI';

const ReadingStatus = ({ book, setBooks, books }) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateBookShelf = (book, status) => {
    if (book.shelf !== status) {
      BooksAPI.update(book, status).then(response => {
        book.shelf = status;

        setBooks(books.filter(thisBook => thisBook.id !== book.id).concat([book]));
        setIsOpen(false);
      });
    }
  };

  return (
    <Styles onClick={() => setIsOpen(!isOpen)}>
      <ArrowDropdown />
      {isOpen && (
        <div className="wrapper">
          <button value="currentlyReading" onClick={e => updateBookShelf(book, e.target.value)}>
            Currently Reading
          </button>
          <button value="wantToRead" onClick={e => updateBookShelf(book, e.target.value)}>
            Want to Read
          </button>
          <button value="read" onClick={e => updateBookShelf(book, e.target.value)}>
            Read
          </button>
          {window.location.pathname === '/' && (
            <button value="remove" onClick={e => updateBookShelf(book, e.target.value)}>
              Remove
            </button>
          )}
        </div>
      )}
    </Styles>
  );
};

export default ReadingStatus;

const Styles = styled.div`
  position: absolute;
  left: 10px;
  top: 20px;

  border-radius: 50%;
  background: ${colors.white};
  box-shadow: ${colors.boxShadow};

  width: 40px;
  height: 40px;

  cursor: pointer;

  .wrapper {
    display: flex;
    flex-direction: column;

    width: 150px;
    z-index: 5;

    button {
      text-align: start;
      background: ${colors.white};
      border: none;

      height: 28px;
      cursor: pointer;

      :hover {
        background: ${colors.navy};
        color: ${colors.white};
      }
    }
  }
`;
