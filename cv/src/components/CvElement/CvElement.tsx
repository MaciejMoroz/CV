import { Heading4 } from 'components/UI/Text/Heading';
import React from 'react';
import styled from 'styled-components/macro';
import { PaddingTopBottom } from 'styles/wrappers.scss';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Col1 = styled.div`
  width: 14%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  min-width: 100px;
`;

const Col2 = styled.div`
  width: 85%;
`;

const Date = styled.div`
  font-weight: ${({ theme }) => theme.fw.bold};
  margin-bottom: 8px;
`;

interface ICvElementProps {
  dateFrom: string;
  dateTo: string;
  heading: string;
}

const CvElement: React.FunctionComponent<ICvElementProps> = ({
  dateFrom,
  dateTo,
  heading,
  children,
}) => {
  return (
    <PaddingTopBottom>
      <Wrapper>
        <Col1>
          <Date>{dateFrom}&nbsp;-&nbsp;</Date>
          <Date>{dateTo}</Date>
        </Col1>
        <Col2>
          <Heading4>{heading}</Heading4>
          <div>{children}</div>
        </Col2>
      </Wrapper>
    </PaddingTopBottom>
  );
};

export default CvElement;
