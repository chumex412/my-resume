import React from 'react';

// Styles
import styled from 'styled-components';
import { Container, SectionHeader, Hide, Description, FlexedWrapper, Dot } from '../style/styles';

const Hobby = () => {

  return (
    <Container>
      <SectionHeader>
        <Hide>
          <h2 className="h3">
            Hobby
          </h2>
        </Hide>
      </SectionHeader>

      <HobDescription>
        <ul>
          <li>
            <div className="flex">
              <div className="top-dot"></div>
              <p className="parag">
                Travelled to 25 Nigerian states, witnessed diverse cultures, enjoyed several local dishes within the duration   of the travel.
              </p>
            </div>
          </li>

          <li>
            <div className="flex">
              <div className="bottom-dot"></div>
              <p className="parag">
                Building and updating features of personal web development projects during free hours.
              </p>
            </div>
          </li>
        </ul>
      </HobDescription>
    </Container>
  );
};

const HobDescription = styled(Description)`
  .flex {
    display: flex;

    div {
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
      border-radius: 50%;
      background-color: var(--primary-color, blue);
    }

    .top-dot {
      margin-top: 0.7rem;
    }

    .bottom-dot {
      align-self: center;
    }
  }

  @media only screen and (max-width: 600px) {
    .flex {
      div {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.5rem;
      }

      .top-dot {
        margin-top: 0.6rem;
      }

      .bottom-dot {
        align-self: flex-start;
        margin-top: 0.5rem;
      }
    }
  }
`;

export default Hobby;