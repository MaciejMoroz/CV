import * as React from 'react';

import { PaddingLeftRigth } from 'styles/wrappers.scss';

import { Heading1 } from 'components/UI/Text/Text';
import Colapsible from 'components/Colapsible/Colapsible';
import {
  ImgWrapper,
  UserInfo,
  UserInfoLabel,
  UserInfoText,
  PersonImg,
} from 'styles/asside.scss';

interface IPersonalInfoProps {
  personInfo: {
    name: string;
    lastName: string;
    email: string;
    phone: number;
    photo?: string;
    linkedin: string;
  };
}

const PersonalInfo: React.FunctionComponent<IPersonalInfoProps> = ({
  personInfo,
}) => {
  return (
    <>
      <PaddingLeftRigth>
        <Heading1>
          {personInfo.name}&nbsp;
          {personInfo.lastName}
        </Heading1>
        <ImgWrapper>
          <PersonImg src={personInfo.photo} />
        </ImgWrapper>
      </PaddingLeftRigth>
      <Colapsible heading="Dane kontaktowe">
        <UserInfo>
          <UserInfoLabel>e-mail:&nbsp;</UserInfoLabel>
          <UserInfoText>
            <a href={`mailto:${personInfo.email}`}>{personInfo.email}</a>
          </UserInfoText>
        </UserInfo>
        <UserInfo>
          <UserInfoLabel>Telefon:&nbsp;</UserInfoLabel>
          <UserInfoText>
            <a href={`tel:${personInfo.phone}`}>{personInfo.phone}</a>
          </UserInfoText>
        </UserInfo>
        <UserInfo>
          <UserInfoLabel>Linkedin:&nbsp;</UserInfoLabel>
          <UserInfoText>
            <a target="_blank" href={`https://www.${personInfo.linkedin}`}>
              {personInfo.linkedin}
            </a>
          </UserInfoText>
        </UserInfo>
      </Colapsible>
    </>
  );
};

export default PersonalInfo;
