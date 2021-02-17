import React from 'react';
import S from './TierBox.styled';
import TierPicture from './TierPicture/TierPicture';

function TierBox() {
  return (
    <S.TierBoxWrapper>
      <TierPicture />
    </S.TierBoxWrapper>
  );
}

export default TierBox;
