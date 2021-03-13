import React from 'react';
import S from './SelectFrame.styled';

interface ISelectFrame {
  title: string;
  pageNum?: number;
  children: React.ReactNode;
}

function SelectFrame(props: ISelectFrame) {
  return (
    <S.SelectFrameWrapper>
      <S.SelectFrameProgressWrapper>
        {props.pageNum && <S.SelectFrameProgressBar pageNum={props.pageNum} />}
      </S.SelectFrameProgressWrapper>
      <S.SelectFrameTitle>{props.title}</S.SelectFrameTitle>
      {props.children}
    </S.SelectFrameWrapper>
  );
}

export default SelectFrame;
