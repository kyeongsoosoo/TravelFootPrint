import React from 'react';
import S from './CounterBox.styled';

interface ISelectBox {
  plusClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  minusClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  count: number;
}

function CounterBox(props: ISelectBox) {
  return (
    <S.SelectBoxWrapper>
      <S.SelectBoxBtn onClick={props.minusClick}>-</S.SelectBoxBtn>
      <S.SelectBoxResultWrapper>{props.count}</S.SelectBoxResultWrapper>
      <S.SelectBoxBtn onClick={props.plusClick}>+</S.SelectBoxBtn>
    </S.SelectBoxWrapper>
  );
}

export default CounterBox;
