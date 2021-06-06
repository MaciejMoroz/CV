import React from 'react';
import styled from 'styled-components';
import CvElement from 'components/CvElement/CvElement';
import { Heading5 } from 'components/UI/Text/Heading';

const Expirence: React.FunctionComponent = () => {
  return (
    <>
      <CvElement
        heading="Infinity Group Sp. z o.o."
        dateFrom="01-07-2019"
        dateTo="26-07-2019"
      >
        <Heading5>Praktyki Front-end</Heading5>
        <p>
          Realizacja projektu graficznego w zespole 3 osobowym wykorzystaniem
          Jira, GitLab
        </p>
        <p>
          Technologie i bilioteki: HTML5, SCSS, JavasSript, BEM, GreenShock,
        </p>
      </CvElement>
    </>
  );
};

export default Expirence;
