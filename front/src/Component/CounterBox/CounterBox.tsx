import React from 'react';
import Button from '../Button/Button';
import S from './CounterBox.styled';


interface ISelectBox {
  plusClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  minusClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  count: number;
}

function CounterBox(props: ISelectBox) {
  return (
    <S.SelectBoxWrapper>
      <Button width={50} height={50} onClick={props.minusClick}>&#45;</Button>
      {/* <S.SelectBoxBtn onClick={props.minusClick}>-</S.SelectBoxBtn> */}
      <S.SelectBoxResultWrapper>{props.count}</S.SelectBoxResultWrapper>
      {/* <S.SelectBoxBtn onClick={props.plusClick}>+</S.SelectBoxBtn> */}
      <Button width={50} height={50} onClick={props.plusClick}>	&#43;</Button>
    </S.SelectBoxWrapper>
  );
}

export default CounterBox;
