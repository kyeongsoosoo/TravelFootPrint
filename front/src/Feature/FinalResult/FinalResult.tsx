import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../Component/Loading/Loading';
import { useGetFinal } from '../../hook/useGetFinal';
import { RootState } from '../../redux';
import Receipt from './component/Receipt/Receipt';
import TierBox from './component/TierBox/TierBox';
import S from './FinalResult.styled';

function FinalResult() {
  const { isLoading, total } = useGetFinal();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.FinalResultBox>
          <TierBox tierInfo={total || 0} />
          <Receipt />
        </S.FinalResultBox>
      )}
    </>
  );
}

export default FinalResult;
