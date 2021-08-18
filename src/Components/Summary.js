import React from 'react';

// Styles
import { SectionHeader, Container, Hide, Description } from '../style/styles';

// Animation
import { titleAnim } from './animation';
import { motion } from 'framer-motion';

const Summary = () => {
  
  return(
    <Container>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Professional Summary
          </motion.h2>
        </Hide>
      </SectionHeader>

      <Description>
        <p className="parag">
          Very passionate about contributing to the growth and development of top-notch/start-up organizations/companies through hard-work, team collaboration and continuous learning.
        </p>
      </Description>
    </Container>
  );
};

export default Summary; 