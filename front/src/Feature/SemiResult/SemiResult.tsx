import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBox from '../../Component/NavBox/NavBox';
import Loading from '../../Component/Loading/Loading';
import useGetDistance from '../../hook/useGetDistance';
import useGetSemi from '../../hook/useGetSemi';
import { RootState } from '../../redux';
import S from './SemiResult.styled';
import ExplainBox from '../../Component/ExplainBox/ExplainBox';

function SemiResult() {
  const { data, error, isLoading } = useGetDistance();
  const { food, distance, daily, sum, isSemiLoading } = useGetSemi();

  return (
    <>
      {(isLoading || isSemiLoading) ? (
        <Loading />
      ) : (
        <S.SemiResultWrapper>
          <S.SemiResultTitle>당신의 탄소발자국은</S.SemiResultTitle>
          {console.log(distance)}
          <S.SemiResultResultBox>{sum ? sum : 0}g</S.SemiResultResultBox>
          <S.SemiResultTitle>입니다.</S.SemiResultTitle>
          <ExplainBox ItemList={daily} />
          <S.SemiResultTextBox>
            나의 하루 탄소발자국을 줄여 <br /> 여행발자국을 늘려볼까요?
          </S.SemiResultTextBox>
          <NavBox prevLink="/select/isDriving" nextLink="/select/offset" />
        </S.SemiResultWrapper>
      )}
    </>
  );
}

export default SemiResult;
