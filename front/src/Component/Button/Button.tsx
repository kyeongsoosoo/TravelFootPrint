import React from 'react';
import S from './Button.styled';

interface IButton {
  width: number;
  height: number;
  children: React.ReactNode;
}

function Button(props: IButton) {
  return (
    <S.ButtonWrapper width={props.width} height={props.height}>
      {props.children}
    </S.ButtonWrapper>
  );
}

export default Button;
