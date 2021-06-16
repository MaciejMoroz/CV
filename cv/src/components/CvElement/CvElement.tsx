import React from 'react';
import styled from 'styled-components/macro';
import { PaddingTopBottom } from 'styles/wrappers.scss';
import { Heading4, Paragraph } from 'components/UI/Text/Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const Col1 = styled.div`
  width: 16%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  min-width: 100px;
  margin-right: 8px;
`;

const Col2 = styled.div`
  width: 82%;
`;

const Date = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.fw.bold};
  margin-bottom: 8px;
  white-space: nowrap;
`;

const Heading = styled(Heading4)`
  margin-bottom: 16px;
`;

interface ICvElementProps {
  dateFrom: string | null;
  dateTo: string | null;
  heading: string | null;
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
          <Date>
            {dateFrom}&nbsp;
            {dateTo != null ? ' - ' : null}
            &nbsp;
          </Date>
          <Date>{dateTo}</Date>
        </Col1>
        <Col2>
          <Heading>{heading}</Heading>
          <div>{children}</div>
        </Col2>
      </Wrapper>
    </PaddingTopBottom>
  );
};

export default CvElement;
