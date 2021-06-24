import * as React from 'react';

import Colapsible from 'components/Colapsible/Colapsible';
import { UserInfo, UserInfoLabel, TechnologyLevel } from 'styles/asside.scss';

interface IItemPersonProgress {
  name: string;
  level: number;
}

interface IPersonProgressProps {
  personProgress: IItemPersonProgress[];
  heading: string;
}

const PersonProgress: React.FunctionComponent<IPersonProgressProps> = ({
  personProgress,
  heading,
}) => {
  return (
    <>
      <Colapsible heading={heading}>
        {personProgress.map((technology) => {
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

export default PersonProgress;
