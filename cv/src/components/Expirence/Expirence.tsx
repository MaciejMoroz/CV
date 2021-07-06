import React from 'react';
import styled from 'styled-components';
import CvElement from 'components/CvElement/CvElement';
import { Heading5, Paragraph } from 'components/UI/Text/Text';
import { Bold, PrimaryLink, Ul, Li, Space } from 'components/UI/common';

const Heading = styled(Heading5)`
  margin-bottom: 8px;
`;

const Expirence: React.FunctionComponent = () => {
  return (
    <>
      <CvElement
        heading="ADSIRA Marketing Agency"
        dateFrom="03.03.2020"
        dateTo="30.06.2021"
      >
        <Heading>Junior Web Developer</Heading>
        <Space />
        <Bold>
          <Paragraph>Projekty:</Paragraph>
        </Bold>
        <Ul>
          <Li>
            <Paragraph>
              <PrimaryLink target="_blank" href="https://lifeswitcher.com">
                Lifeswitcher.com
              </PrimaryLink>{' '}
              Projekt z branży Fit & Health - generator diety ketogenicznej.
            </Paragraph>
            <Paragraph>
              <Bold>Na projekt składają się 4 platformy: </Bold>
            </Paragraph>
            <Ul>
              <Li>
                <Bold>Blog:&nbsp;</Bold>WordPress.
              </Li>
              <Li>
                <Bold>Quiz i panel użytkownika:&nbsp;</Bold>React, React hooks,
                styled-components, i18Next, React Query, Fromik, REST API,
                moment.js, LogRocket, Facebook Messenger.
              </Li>
              <Li>
                <Bold>Panel admina:&nbsp;</Bold>React, Redux, MaterialUI,
                styled-components, REST API.
              </Li>
            </Ul>
          </Li>
          <Li>
            <Paragraph>
              <PrimaryLink target="_blank" href="https://ceramikker.com">
                Ceramikker.com
              </PrimaryLink>{' '}
              Strona sprzedażowa kosmetyków samochodowych.
            </Paragraph>
            <Paragraph>
              <Bold>Technologie:&nbsp;</Bold>
              HTML, SCSS, jQuery, GULP, REST API.
            </Paragraph>
          </Li>
        </Ul>
        <Space />
        <Paragraph>
          <Bold>Pozostałe obowiązki:&nbsp;</Bold>
        </Paragraph>
        <Ul>
          <Li>
            Obsługa serwerów - certyfikaty SSL, dodawanie domen - Plesk,
            DirectAdmin.
          </Li>
          <Li>
            Współpraca z działem marketingu: instalowanie oraz przesyłanie
            danych do Google Tag Menager'a, instalacja pixeli Facebook oraz
            Taboola.
          </Li>
          <Li>
            Wsparcie działu supportu przy rozwiązywaniu problemów użytkowników -
            operacje na bazach danych – phpMyAdmin.
          </Li>
          <Li>
            Analiza i optymalizacja stron internetowych - Webpack Bundle
            Analyzer.
          </Li>
          <Li>
            Wdrażanie frontend'u (HTML, CSS, Bootstrap, JavaScript, jQuery,
            React).
          </Li>
        </Ul>
      </CvElement>
      <CvElement
        heading="Infinity Group Sp. z o.o."
        dateFrom="01.07.2019"
        dateTo="26.07.2019"
      >
        <Heading>Praktyki Front-end</Heading>
        <Paragraph>
          Realizacja projektu graficznego w zespole 3 osobowym wykorzystaniem
          Jira, GitLab.
        </Paragraph>
        <Paragraph>
          <Bold>Technologie: </Bold> HTML5, SCSS, JavasSript, BEM, Gulp,
          GreenShock.
        </Paragraph>
      </CvElement>
      <CvElement
        heading="Biuro Usług Turystycznych Wagant"
        dateFrom="01.07-2015"
        dateTo="31.01-2020"
      >
        <Heading>Event manager</Heading>
        <Paragraph>
          Zarządzanie projektami, zarządzanie budżetem, zarządzanie zespołem,
          koordynacja realizacji eventów, pozyskiwanie klientów, negocjacje z
          klientem i kontrahentami, przygotowywanie ofert na podstawie
          dokumentacji przetargowej, rozliczenia finansowe, logistyka,
          pilotowanie wycieczek, opiekun grup.
        </Paragraph>
      </CvElement>
    </>
  );
};

export default Expirence;
