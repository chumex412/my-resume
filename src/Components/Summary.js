import React from 'react';

// Styles
import { SectionHeader, Container, Hide, Description } from '../style/styles';

const Summary = () => {
  
  return(
    <Container>
      <SectionHeader>
        <Hide>
          <h2 className="h3">
            Professional Summary
          </h2>
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