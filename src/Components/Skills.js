import React from 'react';

// Styles
import { Container, Hide, Description, Dot, FlexedWrapper, SectionHeader } from '../style/styles';

const Summary = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <h2 className="h3">
            Key Skills
          </h2>
        </Hide>
      </SectionHeader>
      
      <Description>
        <ul className="row">
          <li className="col-2">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag">Strong problem solving</p>              
            </FlexedWrapper>
          </li>
          <li className="col-2">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag">Team player</p>
            </FlexedWrapper>
            
          </li>
          <li className="col-2">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag">Good interpersonal skills</p>
            </FlexedWrapper>
            
          </li>
          <li className="col-2">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag">Web development</p>
            </FlexedWrapper>    
          </li>
          <li className="col-2">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag">Analytical thinking</p>
            </FlexedWrapper>
          </li>
          <li className="col-2">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag">Effective communication</p>
            </FlexedWrapper>
          </li>
          <li className="col-2">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag">Time Management</p>
            </FlexedWrapper>
            
          </li>
        </ul>
      </Description>
    </Container>
  );
}

export default Summary;