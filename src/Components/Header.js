import React from 'react';
import styled from 'styled-components';
import { Hide } from '../style/styles';

const Header = () => {

  return (
    <StyledHeader>
      <Hide>
        <h1 className="h2">OFILI CHUKWUEMEKA TIMOTHY</h1>
      </Hide>
      <Hide>
        <p className="parag">
          <span>Tel no: 08135704503.</span>&nbsp;
          <span>Email: chumex412@gmail.com.</span>
        </p>
      </Hide>
      <Hide>
        <p className="parag">
          No. 25, Chukun road Karatudu New Extension, Gonin-gora, Kaduna.
        </p>
      </Hide>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  padding: 2rem 2rem;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  text-align: center;
`;

export default Header;