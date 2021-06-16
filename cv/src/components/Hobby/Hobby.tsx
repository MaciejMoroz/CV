import React from 'react';
import CvElement from 'components/CvElement/CvElement';
import { Ul, Li } from 'components/UI/common';

const Hobby: React.FunctionComponent = () => {
  return (
    <>
      <CvElement heading={null} dateFrom={null} dateTo={null}>
        <Ul>
          <Li>IoT</Li>
          <Li>Elektronika</Li>
          <Li>Rower</Li>
          <Li>Terrarystka</Li>
          <Li>Kajakarstwo</Li>
        </Ul>
      </CvElement>
    </>
  );
};

export default Hobby;
