import React from 'react';
import styled from 'styled-components';

// theme
import { colors } from './styles/Theme';

const BookMenu = ({ value, updateBookShelf, book }) => (
  <Styles
    value={value}
    onChange={(e) => updateBookShelf(book, e.target.value)}
  >
    <option value="move" disabled>
      Move to...
    </option>
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </Styles>
)

export default BookMenu;

const Styles = styled.select`
  position: absolute;
  right: 0;
  bottom: 10px;

  color: ${colors.white};
  border-radius: 50%;
  background: ${colors.navy} url('./icons/arrow-drop-down.svg') no-repeat center;
  background-size: 20px;
  box-shadow: ${colors.boxShadow};

  width: 40px;
  height: 40px;
`;