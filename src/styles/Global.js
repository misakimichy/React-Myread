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