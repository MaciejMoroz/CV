import React from 'react';

import Colapsible from 'components/Colapsible/Colapsible';

interface IExperienceProps {
  heading: string;
}

const Experience: React.FunctionComponent<IExperienceProps> = ({
  children,
  heading,
}) => {
  return (
    <>
      <Colapsible heading={heading} exp={true}>
        <>{children}</>
      </Colapsible>
    </>
  );
};

export default Experience;
