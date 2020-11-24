import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ReadingStatus from './ReadingStatus';

import { colors } from '../styles/Theme';

const BookListDetail = ({ book, setBooks, books }) => {
  const { title, subtitle, authors, imageLinks, previewLink, categories, description } = book;
  const [truncateSubtitle, setTruncateSubtitle] = useState(subtitle);
  const [truncateDescription, setTruncateDescription] = useState(description);

  // Default image for book-cover
  const defaultImage = 'http://via.placeholder.com/128x193?text=No%20Cover';

  useEffect(() => {
    const truncateText = (text, length, setFunc) =>
      text.length > length ? setFunc(text.substring(0, length) + '...') : text;

    if (truncateSubtitle !== undefined && truncateSubtitle.length > 25)
      truncateText(truncateSubtitle, 25, setTruncateSubtitle);

    if (truncateDescription !== undefined && truncateDescription.length > 150)
      truncateText(truncateDescription, 150, setTruncateDescription);
  }, [truncateSubtitle, truncateDescription]);

  return (
    <Styles>
      <img src={imageLinks ? imageLinks.thumbnail : defaultImage} alt={`thumbnail of ${title}`} />
      <ReadingStatus book={book} setBooks={setBooks} books={books} />
      <div>
        <a href={previewLink} target="__blank">
          <h3>{title}</h3>
          <h4 className="subtitle">{truncateSubtitle}</h4>
          <div className="book-authors">{Array.isArray(authors) ? authors.join(', ') : ''}</div>
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
  align-items: center;

  width: 500px;
  margin-bottom: 20px;
  padding: 20px;

  :hover {
    box-shadow: ${colors.boxShadow};
    border-radius: 4px;
  }

  img {
    max-height: 190px;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    h3,
    h4 {
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

  @media screen and (max-width: 450px) {
    flex-direction: column;

    img {
      width: 70%;
      max-height: unset;
      margin-bottom: 10px;
    }
  }
`;
