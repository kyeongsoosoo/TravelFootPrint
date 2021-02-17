import React from 'react';
import S from './SelectFrame.styled';

interface ISelectFrame {
  title: string;
  children: React.ReactNode;
}

function SelectFrame(props: ISelectFrame) {
  return (
    <S.SelectFrameWrapper>
      <S.SelectFrameTitle>{props.title}</S.SelectFrameTitle>
      {props.children}
    </S.SelectFrameWrapper>
  );
}

export default SelectFrame;
