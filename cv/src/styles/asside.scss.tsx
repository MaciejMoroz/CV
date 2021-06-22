import styled from 'styled-components/macro';

export const ImgWrapper = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.space.base} 0;
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    margin: ${({ theme }) => theme.space.primary} 0;
  }
`;

export const UserInfo = styled.div`
  margin: 8px;
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    margin: ${({ theme }) => theme.space.base};
  }
`;

export const UserInfoLabel = styled.div`
  font-weight: ${({ theme }) => theme.fw.bold};
  margin-bottom: 4px;
`;

export const UserInfoText = styled.div``;

export const PersonImg = styled.img`
  width: 100%;
  max-width: 330px;
  height: auto;
`;

export const TechnologyLevel = styled.div<{ level: number }>`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #252932;
  display: ${({ level }) => (level === 0 ? 'none' : 'block')};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: ${({ level }) => level * 10}%;
    height: 10px;
  }
`;
