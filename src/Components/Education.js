import React from 'react';

// Style
import styled from 'styled-components';
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

// Animation 
import { motion } from 'framer-motion';
import { titleAnim, fade } from './animation';

const Education = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Education
          </motion.h2>
        </Hide>
      </SectionHeader>

      <EduDescription>
        <ul>
          <motion.li variants={fade}>
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag"><strong>NATIONAL YOUTH SERVICE CORP | 2016 – 2017.</strong></p>
            </FlexedWrapper>
            <div className="sub">
              <p className="parag"><strong>N.Y.S.C Discharge Certificate.</strong></p>
            </div>
          </motion.li>

          <motion.li  variants={fade}>
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag"><strong>FEDERAL UNIVERSITY OF TECHNOLOGY, MINNA, NIGER STATE. | 2011 – 2015.</strong></p>
            </FlexedWrapper>
            <div className="sub">
              <p className="parag"><strong>BTech Biochemistry.</strong></p>
            </div>
          </motion.li>

          <motion.li variants={fade}>
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag"><strong>AUNTIE RAMATU COLLEGE, KATSINA | 2006 – 2009</strong></p>
            </FlexedWrapper>
            <div className="sub">
              <p className="parag"><strong>SSCE.</strong></p>
            </div>
          </motion.li>
        </ul>
      </EduDescription>
    </Container>
  );
};

const EduDescription = styled(Description)`
  .sub {
    padding-left: 2rem;

    @media only screen and (max-width: 600px) {
      padding-left: 1rem; 
    }
  }
  
`;

export default Education;