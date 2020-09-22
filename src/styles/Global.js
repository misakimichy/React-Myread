import { css } from 'styled-components';
import { colors } from './Theme';

export default css`
  html,
  body, {
    height: 100%;
  }

  body {
    line-height: 1.5;
  }

  body,
  .app {
    background: ${colors.white};
  }

  h1, h2, h3, h4, h5 {
    color: ${colors.navy};
  }

  p {
    color: ${colors.darkGrey};
  }

  /* search page */
  .search-books-bar {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
    width: 100%;
    z-index: 5;
  }

  .search-books-input-wrapper {
    flex: 1;
    background: #e9e;
  }

  .search-books-bar input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }

  .close-search {
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background-image: url('./icons/arrow-back.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    border: none;
    outline: none;
  }

  button:active {
    border: red;
    outline: none;
  }

  .search-books-results {
    padding: 80px 10px 20px;
  }

  /* books card styling */
  .books-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
    list-style-type: none;
    padding: 10px;
    margin-bottom: 0;
  }
`;