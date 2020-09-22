import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BookMenu from './BookMenu';

import { colors } from './styles/Theme';

const BookListDetail = ({ book, updateBookShelf }) => {
  const { title, subtitle, authors, shelf, imageLinks, previewLink, categories, description } = book;
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
      <img src={imageLinks.thumbnail  || defaultImage} alt={`thumbnail of ${title}`}/>
      <div>
        <a href={previewLink} target='__blank'>
          <h3>{title}</h3>
          <h4 className="subtitle">{subtitle}</h4>
          <div className="book-authors">
            {Array.isArray(authors) ? authors.join(', ') : ''}
          </div>
        </a>
        {categories && <div className="category">{categories}</div>}
        {description !== undefined && <p className="description">{truncateDescription}</p>}
      </div>
  
      <BookMenu updateBookShelf={updateBookShelf} value={shelf} book={book} />
    </Styles>
  );
};

// Add prop-types
BookListDetail.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
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

  img {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    h3, h4 {
      margin: 0;
      color: ${colors.darkGrey};
    }
  }

  .category, .description {
    display: inline-block;
    font-size: 14px;
  }

  .book-cover {
    box-shadow: ${colors.boxShadow};
    width: 128px;
  }
`;