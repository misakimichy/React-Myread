import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// components
import BookListDetail from './BookListDetail';

// icons
import CloseIcon from '../icons/CloseIcon.js';

// theme
import { colors } from '../styles/Theme';

const SearchWindow = ({ books, searchBook, setBooks}) => {
  const [searchData, setSearchData] = useState('');

  // Update query
  const handleQueryUpdate = (value) => {
    setSearchData(value);
    searchBook(value);
  };

  const renderSearchResult = () => {
    if (searchData) {
      return books.length === 0 ? (
        <div>No results found</div>
      ) : (
        books.map(book => (
          <BookListDetail
            key={book.id}
            book={book}
            books={books}
            setBooks={setBooks}
          />
        ))
      );
    }
  };
  
  return (
    <Styles>
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          <CloseIcon />
        </Link>
        <input
          type="text"
          placeholder="Search by title"
          value={searchData}
          onChange={e => handleQueryUpdate(e.target.value)}
        />
      </div>
      <div className="books-container" style={{marginTop: '70px'}}>
        {renderSearchResult()}
      </div>
    </Styles>
  );
}

export default SearchWindow;

const Styles = styled.div`
  .search-books-bar {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;

    background: ${colors.navy};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
    width: 100%;

    a {
      display: flex;
      justify-content: center;

      width: 5%;
      padding: 15px;
      svg {
        width: 20px;
        height: 20px;
        fill: ${colors.white};
      }
    }

    input {
      font-size: 1.25em;
      color: ${colors.navy};
      border: none;
      outline: none;
      
      width: 100%;
      padding: 20px 10px;

      ::placeholder {
        color: ${colors.navy};
      }
    }
  }
`;