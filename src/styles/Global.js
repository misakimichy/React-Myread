import { css } from 'styled-components';
import { colors } from './Theme';

export default css`
  body {
    height: 100%;
    line-height: 1.5;
  }

  .app {
    background: ${colors.white};
  }

  h1, h2, h3, h4, h5 {
    color: ${colors.navy};
  }

  p {
    color: ${colors.darkGrey};
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