import React from 'react';
import S from './Loading.styled';
import { FaSpinner } from 'react-icons/fa';

function Loading() {
  return (
    <S.LoadingWrapper>
      {console.log('hi')}
      <S.LoadingSpinner />
      <S.LoadingBox>
        <S.LoadingText>알고 계셨나요?</S.LoadingText>
        <S.LoadingTextBox>
          1880-2019 년 사이 지구가 가장 더웠던 5해는 모두 2015년 이후였습니다.
        </S.LoadingTextBox>
      </S.LoadingBox>
    </S.LoadingWrapper>
  );
}

export default Loading;
