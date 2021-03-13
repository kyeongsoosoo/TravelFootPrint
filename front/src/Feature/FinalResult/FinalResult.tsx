import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../Component/Loading/Loading';
import { useGetFinal } from './useGetFinal';
import { RootState } from '../../redux';
import Receipt from './component/Receipt/Receipt';
import TierBox from './component/TierBox/TierBox';
import S from './FinalResult.styled';

function FinalResult() {
  const { isFinished, costTotal, finalTotal, travelTotal } = useGetFinal();
  return (
    <>{!isFinished ? <Loading /> : <S.FinalResultBox></S.FinalResultBox>}</>
  );
}

export default FinalResult;
