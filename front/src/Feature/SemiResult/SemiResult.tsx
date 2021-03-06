import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LinkBox from '../../Component/LinkBox/LinkBox';
import Loading from '../../Component/Loading/Loading';
import useGetDistance from '../../hook/useGetDistance';
import useGetSemi from '../../hook/useGetSemi';
import { RootState } from '../../redux';
import S from './SemiResult.styled';

function SemiResult() {
  const { distance, isLoading } = useGetDistance();
  const sum = useGetSemi();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.SemiResultWrapper>
          <S.SemiResultTitle>당신의 탄소발자국은</S.SemiResultTitle>
          {console.log(distance)}
          <S.SemiResultResultBox>{sum ? sum : 0}g</S.SemiResultResultBox>
          <S.SemiResultTitle>입니다.</S.SemiResultTitle>
          <S.SemiResultTextBox>
            우리는 일상속에서 다양한 방법을 통해 탄소발자국을 상쇄시킬 수
            있습니다. 한번 알아볼까요?
          </S.SemiResultTextBox>
          <LinkBox prevLink="/select/transport" nextLink="/select/offset" />
        </S.SemiResultWrapper>
      )}
    </>
  );
}

export default SemiResult;
