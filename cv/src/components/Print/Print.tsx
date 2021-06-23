import React, { useEffect, useState } from 'react';
import ReactToPrint from 'react-to-print';

const pageStyle = `
  @page {
    size: 210mm 297mm;
    margin: 0mm;
  }
`;

interface IPrintProps {
  CVref: any;
}

const Print: React.FunctionComponent<IPrintProps> = ({ CVref }) => {
  const [componentToPrint, setComponentToPrint] = useState(null);
  useEffect(() => {
    if (CVref != null) {
      console.log(CVref);
      setComponentToPrint(CVref.current);
    }
  }, [CVref]);
  return (
    <>
      <ReactToPrint
        trigger={() => <button>_</button>}
        content={() => componentToPrint}
        pageStyle={pageStyle}
      />
    </>
  );
};

export default Print;
