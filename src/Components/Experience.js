import React from 'react';

// Styles
import styled from 'styled-components';
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

const Experience = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <h2 className="h3">
            Work Experience
          </h2>
        </Hide>
      </SectionHeader>

      <ExpDescription>
        <div>
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
        </div>

        <div>
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
        </div>
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