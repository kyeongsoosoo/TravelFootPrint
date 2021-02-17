import React from 'react';
import S from './SelectBox.styled';

interface ISelectBox {
  plusClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  minusClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  count: number;
}

function SelectBox(props: ISelectBox) {
  return (
    <S.SelectBoxWrapper>
      <S.SelectBoxBtn onClick={props.minusClick}>-</S.SelectBoxBtn>
      <S.SelectBoxResultWrapper>{props.count}</S.SelectBoxResultWrapper>
      <S.SelectBoxBtn onClick={props.plusClick}>+</S.SelectBoxBtn>
    </S.SelectBoxWrapper>
  );
}

export default SelectBox;
