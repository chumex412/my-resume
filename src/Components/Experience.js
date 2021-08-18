import React from 'react';

// Styles
import styled from 'styled-components';
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

// Animation 
import { motion } from 'framer-motion';
import { titleAnim, shrink } from './animation';

const Experience = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <motion.h2 variants={titleAnim} className="h3">
            Work Experience
          </motion.h2>
        </Hide>
      </SectionHeader>

      <ExpDescription>
        <motion.div variants={shrink}>
          <header>
            <Hide>
              <h3 className="h4">
                HNG Intern | June 2020 – August 2020.
              </h3>
              <h3 className="h4">
                HNGi7 Internship
              </h3>
            </Hide>
          </header>
          <p className="parag">
            Formed a team of frontend developers where UI designs were transformed into webpages, and improved other skills necessary for the growth of frontend developers by brainstorming through real problems, their tangible solutions and working on real life projects during the 3 months fully remote internship.
          </p>
        </motion.div>

        <motion.div variants={shrink}>
          <header>
            <Hide>
              <h3 className="h4">
                Chemistry Teacher | April 2016 – April 2017.
              </h3>
              <h3 className="h4">
                Government Secondary School, Rimaye, Katsina.
              </h3>
            </Hide>
          </header>
          <p className="parag">Taught chemistry in a local secondary school for one year.</p>
          <ul>
            <li>
              <FlexedWrapper>
                <Dot></Dot>
                <p className="parag">Prepared Lesson plan.</p>
              </FlexedWrapper>
            </li>
            <li>
              <FlexedWrapper>
                <Dot></Dot>
                <p className="parag">Imparted knowledge using available teaching aid in a standard learning environment.</p>
              </FlexedWrapper>
            </li>
          </ul>
        </motion.div>
      </ExpDescription>
    </Container>
  );
};

const ExpDescription = styled(Description)`
  div:not(:first-child) {
    margin-top: 1.5rem;
  }

  div {
    ul {
      padding-left: 2rem;
      li {
        padding: 0.3rem 0
      }
    }
  }
`;

export default Experience;