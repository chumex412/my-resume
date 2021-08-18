import React from 'react';
import styled from 'styled-components';
import { Hide } from '../style/styles';

// Animation 
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from './animation';

const Header = () => {

  return (
    <StyledHeader  variants={pageAnimation} initial="hidden" animate="show">
      <Hide>
        <motion.h1 variants={titleAnim} className="h2">OFILI CHUKWUEMEKA TIMOTHY</motion.h1>
      </Hide>
      <Hide>
        <motion.p variants={titleAnim} className="parag">
          <span>Tel no: 08135704503.</span>&nbsp;
          <span>Email: chumex412@gmail.com.</span>
        </motion.p>
      </Hide>
      <Hide>
        <motion.p variants={titleAnim} className="parag">
          No. 25, Chukun road Karatudu New Extension, Gonin-gora, Kaduna.
        </motion.p>
      </Hide>
    </StyledHeader>
  )
};

const StyledHeader = styled(motion.header)`
  padding: 2rem 2rem;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  text-align: center;
`;

export default Header;