import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import BookMenu from './BookMenu';

import { colors } from '../styles/Theme';

const BookListDetail = ({ book, setBooks, books }) => {
  const { title, subtitle, authors, imageLinks, previewLink, categories, description } = book;
  const [ truncateDescription, setTruncateDescription ] = useState(description);

  // Default image for book-cover
  const defaultImage = 'http://via.placeholder.com/128x193?text=No%20Cover';

  useEffect(() => {
    const truncateText = (text, length) =>
      text.length > length ? setTruncateDescription(text.substring(0, length) + '...') : text;
    
    if (truncateDescription !== undefined && truncateDescription.length > 150) truncateText(truncateDescription, 150);
  }, [truncateDescription]);
  
  return (
    <Styles>
      <img
        src={imageLinks ? imageLinks.thumbnail : defaultImage}
        alt={`thumbnail of ${title}`}
        style={{marginRight: '20px'}}
      />
      <BookMenu
        book={book}
        setBooks={setBooks}
        books={books}
      />
      <div>
        <a href={previewLink} target='__blank'>
          <h3>{title}</h3>
          <h4 className="subtitle">{subtitle}</h4>
          <div className="book-authors">
            {Array.isArray(authors) ? authors.join(', ') : ''}
          </div>
        </a>
        {categories && <div className="description">{categories}</div>}
        {description !== undefined && <p className="description">{truncateDescription}</p>}
      </div>
    </Styles>
  );
};

export default BookListDetail;

const Styles = styled.div`
  position: relative;
  display: flex;

  width: 500px;
  margin-bottom: 20px;
  padding: 20px;

  :hover {
    box-shadow: ${colors.boxShadow};
    border-radius: 4px;
  }

  a {
    text-decoration: none;
    h3, h4 {
      margin: 0;
      color: ${colors.darkGrey};
    }

    .book-authors {
      font-size: 0.9em;
      color: ${colors.brown};
    }
  }

  .description {
    font-size: 14px;
  }

  .book-cover {
    box-shadow: ${colors.boxShadow};
    width: 128px;
  }
`;