import React from 'react';
import styled from 'styled-components/macro';

import PersonalInfo from 'components/PersonalInfo/PersonalInfo';
import Technologies from 'components/Technologies/Technologies';
import CvSection from 'components/CvSection/CvSection';

import PersonPhoto from 'assets/IMG_4965.jpg';
import Expirence from 'components/Expirence/Expirence';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-width: ${({ theme }) => theme.bp.mob};

  @media (min-width: ${({ theme }) => theme.bp.desk}) {
    flex-direction: row;
  }
`;

const AsideWrapper = styled.aside`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  max-width: 362px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.base} 0;

  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    max-width: 400px;
    margin: 0;
    padding: ${({ theme }) => theme.space.primary} 0;
    min-height: 100vh;
  }
`;

const MainContent = styled.div`
  max-width: 362px;
  padding: ${({ theme }) => theme.space.base} 0;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    max-width: none;
    padding: ${({ theme }) => `${theme.space.primary}`};
  }
`;

const personInfo = {
  name: 'Maciej',
  lastName: 'Moroz',
  email: 'maciej.moroz89@gmail.com',
  phone: 600437869,
  photo: PersonPhoto,
};

const technologies = [
  { name: 'React', level: 6 },
  { name: 'Redux', level: 3 },
  { name: 'JavaScript ES5/ES6', level: 6 },
  { name: 'TypeScript', level: 4 },
  { name: 'jQuery', level: 3 },
  { name: 'HTML5', level: 6 },
  { name: 'CSS3', level: 6 },
  { name: 'Photoshop', level: 4 },
  { name: 'GitHub, GitLab, Bitbucket', level: 4 },
  { name: 'Jira', level: 4 },
];

const languages = [{ name: 'J. angielski', level: 3 }];

const Cv: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <AsideWrapper>
        <PersonalInfo personInfo={personInfo} />
        <Technologies heading="Technologie" technologies={technologies} />
        <Technologies heading="Języki obce" technologies={languages} />
      </AsideWrapper>
      <MainContent>
        <CvSection heading="Doświadczenie">
          <Expirence />
        </CvSection>
      </MainContent>
    </Wrapper>
  );
};

export default Cv;