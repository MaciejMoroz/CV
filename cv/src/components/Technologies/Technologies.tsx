import * as React from 'react';

import Colapsible from 'components/Colapsible/Colapsible';
import { UserInfo, UserInfoLabel, TechnologyLevel } from 'styles/asside.scss';

interface IItemTechnologies {
  name: string;
  level: number;
}

interface ITechnologiesProps {
  technologies: IItemTechnologies[];
  heading: string;
}

const PersonalInfo: React.FunctionComponent<ITechnologiesProps> = ({
  technologies,
  heading,
}) => {
  return (
    <>
      <Colapsible heading={heading}>
        {technologies.map((technology) => {
          return (
            <UserInfo key={technology.name}>
              <UserInfoLabel>{technology.name}:&nbsp;</UserInfoLabel>
              <TechnologyLevel level={technology.level} />
            </UserInfo>
          );
        })}
      </Colapsible>
    </>
  );
};

export default PersonalInfo;
