import React from 'react';

// Styles
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

const Technical = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <h2 className="h3">
            Technical Skill
          </h2>
        </Hide>
      </SectionHeader>

      <Description>
        <ul className="row">
          <li className="col-3">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag"><strong>Languages:</strong> HTML</p>
            </FlexedWrapper>
          </li>
          <li className="col-3">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag"><strong>Scripting Languages:</strong> JavaScript</p>
            </FlexedWrapper>
          </li>

          <li className="col-3">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag"><strong>Framework/Library:</strong> Bootstrap, React</p>
            </FlexedWrapper>
          </li>

          <li className="col-3">
            <FlexedWrapper>
              <Dot></Dot>
              <p className="parag"><strong>Others:</strong> CSS, SASS</p>
            </FlexedWrapper>
          </li>
        </ul>
      </Description>
    </Container>
  );
};

export default Technical;