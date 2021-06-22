import React from 'react';
import styled from 'styled-components';
import pdfIcon from 'assets/img/pdf_icon_24px.png';
import { SecondaryLink } from 'components/UI/common';
import { Paragraph } from 'components/UI/Text/Text';

import cvPdf from 'assets/files/Maciej Moroz Frontend developer.pdf';
import theme from 'theme/Theme';

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space.base};
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    padding: 0;
  }
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const HidePrint = styled.div`
  @media print {
    display: none;
  }
`;

const Footer: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Paragraph>
        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia
        rekrutacji na aplikowane przeze mnie stanowisko.
      </Paragraph>
      <HidePrint>
        <SecondaryLink href={cvPdf} download>
          <Icon src={pdfIcon} alt="pdf icon" />
          Pobierz CV
        </SecondaryLink>
      </HidePrint>
    </Wrapper>
  );
};

export default Footer;
