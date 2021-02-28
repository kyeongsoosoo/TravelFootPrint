import React from 'react';
import S from './RdBoxInp.styled';

interface IRdBoxInp {
  isSelected: boolean;
  id: string;
}

function RdBoxInp(props: IRdBoxInp) {
  return (
    <S.RdBoxInpWrapper
      isSelected={props.isSelected}
      id={props.id}
      className={'radio-inp'}
    >
      <S.RdBoxInpText id={props.id} className={'radio-inp'}>
        {props.id === 'motorcycle' ? '오토바이' : '걷기/자전거'}
      </S.RdBoxInpText>
    </S.RdBoxInpWrapper>
  );
}

export default RdBoxInp;
