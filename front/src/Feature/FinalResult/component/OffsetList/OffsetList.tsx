import React from 'react';
import ExplainBox from '../../../../Component/ExplainBox/ExplainBox';
import { SelectType } from '../../../../lib/types';
import S from './OffsetList.styled';
import useOffsetList from './useOffsetList';

function OffsetList() {
  const { offsetTotal } = useOffsetList();

  return (
    <S.OffsetListWrapper>
      <S.OffsetListTitle>나의 여행발자국 내역</S.OffsetListTitle>
      <ExplainBox ItemList={offsetTotal} />
    </S.OffsetListWrapper>
  );
}

export default OffsetList;
