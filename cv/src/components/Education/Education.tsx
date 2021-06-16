import React from 'react';
import styled from 'styled-components';
import CvElement from 'components/CvElement/CvElement';
import { Heading5, Paragraph } from 'components/UI/Text/Text';
import { Bold, Ul, Li } from 'components/UI/common';

const Heading = styled(Heading5)`
  margin-bottom: 8px;
`;

const Education: React.FunctionComponent = () => {
  return (
    <>
      <CvElement
        heading="Politechnika Białostocka, JavaScript Developer"
        dateFrom="10-2018"
        dateTo="06-2019"
      >
        <Heading>Plan studiów:&nbsp;</Heading>
        <Paragraph>
          <Bold>I Semestr</Bold>
        </Paragraph>
        <Ul>
          <Li>Programowanie w języku JavaScript</Li>
          <Li>Angular od podstaw – Programowanie aplikacji WEB</Li>
          <Li>Framework i ekosystem React – Wprowadzenie</Li>
          <Li>NodeJS – środowisko i technologia ServerSide 1</Li>
          <Li>Podstawy Agile i Scrum (wykład/pracownia</Li>
          <Li>Metodyka DevOps – produkcja i utrzymanie oprogramowania</Li>
        </Ul>
        <Paragraph>
          <Bold>II Semestr</Bold>
        </Paragraph>
        <Ul>
          <Li>Zaawansowane zagadnienia języka JavaScript</Li>
          <Li>Zaawansowane programowanie aplikacji w Angular</Li>
          <Li>Framework i ekosystem React – Aplikacja serwerowa</Li>
          <Li>NodeJS – środowisko i technologia ServerSide 2</Li>
          <Li>Wytwarzanie oprogramowania z wykorzystaniem Agile i Scrum</Li>
          <Li>Aplikacje mobilne w technologii React Native</Li>
        </Ul>
      </CvElement>
      {/*  */}
      <CvElement
        heading="Politechnika Białostocka, „Aplikacje Internetowe – Front-End
        Development”"
        dateFrom="10-2017"
        dateTo="06-2018"
      >
        <Heading>Plan studiów:&nbsp;</Heading>
        <Paragraph>
          <Bold>I Semestr</Bold>
        </Paragraph>
        <Ul>
          <Li>Podstawy programowania HTML5/CSS3</Li>
          <Li>Podstawy programowania JavaScript</Li>
          <Li>Tworzenie szablonów HTML na podstawie projektów graficznych</Li>
          <Li>Webdesign – Wprowadzenie</Li>
          <Li>Projektowanie User Experience</Li>
          <Li>Narzędzia Front-End Developera 1</Li>
        </Ul>
        <Paragraph>
          <Bold>II Semestr</Bold>
        </Paragraph>
        <Ul>
          <Li>Zaawansowane techniki programowania HTML5/CSS3</Li>
          <Li>Język JavaScript w praktyce</Li>
          <Li>Zaawansowane frameworki JavaScript</Li>
          <Li>Web Design – Zagadnienia zaawansowane</Li>
          <Li>Narzędzia Front-End Developera 2</Li>
        </Ul>
      </CvElement>
      {/*  */}
      <CvElement
        heading="Politechnika Białostocka, Logistyka"
        dateFrom="10-2008"
        dateTo="05-2011"
      >
        <Heading>Plan studiów:&nbsp;</Heading>
        <Paragraph>
          <Bold>I Semestr</Bold>
        </Paragraph>
        <Ul>
          <Li>Podstawy programowania HTML5/CSS3</Li>
          <Li>Podstawy programowania JavaScript</Li>
          <Li>Tworzenie szablonów HTML na podstawie projektów graficznych</Li>
          <Li>Webdesign – Wprowadzenie</Li>
          <Li>Projektowanie User Experience</Li>
          <Li>Narzędzia Front-End Developera 1</Li>
        </Ul>
        <Paragraph>
          <Bold>II Semestr</Bold>
        </Paragraph>
        <Ul>
          <Li>Zaawansowane techniki programowania HTML5/CSS3</Li>
          <Li>Język JavaScript w praktyce</Li>
          <Li>Zaawansowane frameworki JavaScript</Li>
          <Li>Web Design – Zagadnienia zaawansowane</Li>
          <Li>Narzędzia Front-End Developera 2</Li>
        </Ul>
      </CvElement>
    </>
  );
};

export default Education;
