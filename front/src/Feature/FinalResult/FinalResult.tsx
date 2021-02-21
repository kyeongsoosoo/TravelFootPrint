import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../Component/Loading/Loading';
import { RootState } from '../../redux';
import Receipt from './component/Receipt/Receipt';
import TierBox from './component/TierBox/TierBox';
import S from './FinalResult.styled';

function FinalResult() {
  const finalTotal = useSelector((state: RootState) => state.total.final);
  const loading = useSelector((state: RootState) => state.total.loading);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <S.FinalResultBox>
          <TierBox tierInfo={finalTotal || 0} />
          <Receipt />
        </S.FinalResultBox>
      )}
    </>
  );
}

export default FinalResult;
