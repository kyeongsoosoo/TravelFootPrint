import React from 'react';
import { TierService } from '../../../../services/TierService';
import S from './TierBox.styled';
import TierPicture from './TierPicture/TierPicture';
import TierText from './TierText/TierText';

interface ITierBox {
  tierInfo: number;
}

function TierBox(props: ITierBox) {
  const Tier = new TierService(props.tierInfo).getTier();

  return (
    <S.TierBoxWrapper>
      <TierPicture />
      <TierText TierName={Tier.place} />
    </S.TierBoxWrapper>
  );
}

export default TierBox;
