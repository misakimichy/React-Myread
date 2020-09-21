import { css } from 'styled-components';
import { colors } from './Theme';

export default css`
  html,
  body,
  .root {
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

  /* main page */
  .list-books-content {
    padding: 0 0 80px;
  }

  .bookshelf-title {
    border-bottom: 1px solid ${colors.lightGrey};
    color: #666;
  }

  .open-search {
    position: fixed;
    right: 25px;
    bottom: 25px;
  }

  .open-search a {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #d3e0eb url('./icons/add.svg') no-repeat center;
    background-size: 28px;
    box-shadow: ${colors.boxShadow};
    font-size: 0;
    outline: 0;
  }

  .open-search button:hover {
    background-color: rgb(168, 210, 233);
  }

  /* search page */

  .search-books-bar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
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

  /* books grid */

  .books-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
    list-style-type: none;
    padding: 10px;
    margin-bottom: 0;
  }

  .books-container li {
    padding: 10px 15px;
    text-align: left;

    width: 250px;
  }

  .book {
    width: 140px;
  }

  .book-authors {
    font-size: 0.9em;
    color: #999;
  }

  .book-top {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
  }
`;