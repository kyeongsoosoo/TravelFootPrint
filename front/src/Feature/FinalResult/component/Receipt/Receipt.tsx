import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import useOffsetItem from '../../../../hook/useOffsetItem';
import { RootState } from '../../../../redux';
import S from './Receipt.styled';

function Receipt() {
  const offsetItems = useOffsetItem();

  const usedTotal = useSelector((state: RootState) => state.total.semi);
  const finalTotal = useSelector((state: RootState) => state.total.final);

  const renderOffsetRecord = useCallback((item, idx) => {
    return (
      <S.ReceiptItemBox key={idx}>
        <S.ReceiptItemTitle>
          <p>{item.key}</p>
          <p>{item.count}</p>
          <p>{item.weight}g</p>
        </S.ReceiptItemTitle>
        <S.ReceiptItemDescript>{item.description}</S.ReceiptItemDescript>
      </S.ReceiptItemBox>
    );
  }, []);

  return (
    <S.ReceiptWrapper>
      <>
        <S.ReceiptTitle />
        <S.ReceiptDate>1999-02-03</S.ReceiptDate>
        <S.LinedBox>탄소 거래 내역</S.LinedBox>
        <S.LinedBox>상쇄방법</S.LinedBox>
        <S.LinedBox>
          {offsetItems ? (
            offsetItems.map(renderOffsetRecord)
          ) : (
            <div>Loading</div>
          )}
        </S.LinedBox>
        <S.LinedBox>
          <div style={{ width: '100%' }}>
            <S.ReceiptItemTitle>
              <p> 상쇄된 탄소발자국: </p>
              <p> {finalTotal}g</p>
            </S.ReceiptItemTitle>

            <S.ReceiptItemTitle>
              <p> 사용한 탄소발자국: </p>
              <p> {usedTotal}g</p>
            </S.ReceiptItemTitle>
          </div>
        </S.LinedBox>
        <S.LinedBox>
          <S.ReceiptItemTitle>
            <p>총 탄소발자국:</p>
            <p>{usedTotal - finalTotal}g</p>
          </S.ReceiptItemTitle>
        </S.LinedBox>

        <S.ReceiptBarcode />
      </>
    </S.ReceiptWrapper>
  );
}

export default Receipt;
