import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux';
import S from './TierText.styled';

interface ITierText {
  TierName: string;
}

function TierText(props: ITierText) {
  const OffsetResult = useSelector((state: RootState) => state.total.final);

  return (
    <S.TierTextWrapper>
      <S.TierTextTitle>{props.TierName}</S.TierTextTitle>
      <S.TierTextOffset>
        <p
          style={{
            color: '#77d32c',
            fontSize: '20px',
            display: 'inline-block',
          }}
        >
          {OffsetResult || 0}
        </p>
        g을 상쇄시켰군요!
      </S.TierTextOffset>
      <S.TierTextContent>
        오토바이를 타고 안암역에서 {props.TierName}까지 갈 수 있는 거리입니다.
      </S.TierTextContent>
    </S.TierTextWrapper>
  );
}

export default TierText;
