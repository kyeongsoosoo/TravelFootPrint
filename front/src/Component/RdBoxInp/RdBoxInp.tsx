import React from 'react';
import S from './RdBoxInp.styled';

interface IRdBoxInp {
  isSelected: boolean;
  id: string;
  name: string;
}

function RdBoxInp(props: IRdBoxInp) {
  return (
    <S.RdBoxInpWrapper
      isSelected={props.isSelected}
      id={props.id}
      className={'radio-inp'}
    >
      <S.RdBoxInpText id={props.id} className={'radio-inp'}>
        {props.name}
      </S.RdBoxInpText>
    </S.RdBoxInpWrapper>
  );
}

export default RdBoxInp;
