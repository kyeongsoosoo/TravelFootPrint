import React from 'react';
import S from './RdBoxInp.styled';

interface IRdBoxInp {
  isSelected: boolean;
  id: string;
}

function RdBoxInp(props: IRdBoxInp) {
  return (
    <S.RdBoxInpWrapper>
      <S.RdBoxInpBtnWrapper className="radio-inp" id={props.id}>
        {props.isSelected && <S.RdBoxInpChoosedBtn />}
      </S.RdBoxInpBtnWrapper>
      <S.RdBoxInpText>{props.id}</S.RdBoxInpText>
    </S.RdBoxInpWrapper>
  );
}

export default RdBoxInp;
