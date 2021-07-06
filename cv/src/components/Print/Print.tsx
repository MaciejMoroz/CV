import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactToPrint from 'react-to-print';

const pageStyle = `
  @page {
    size: 210mm 297mm;
    margin: 2.5mm 2mm;
  }
`;

const Wrapper = styled.div`
  position: absolute;
`;

const PrintBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
interface IPrintProps {
  CVref: any;
}

const Print: React.FunctionComponent<IPrintProps> = ({ CVref }) => {
  const [componentToPrint, setComponentToPrint] = useState(null);
  useEffect(() => {
    if (CVref != null) {
      setComponentToPrint(CVref.current);
    }
  }, [CVref]);
  return (
    <Wrapper>
      <ReactToPrint
        trigger={() => <PrintBtn>.</PrintBtn>}
        content={() => componentToPrint}
        pageStyle={pageStyle}
      />
    </Wrapper>
  );
};

export default Print;
