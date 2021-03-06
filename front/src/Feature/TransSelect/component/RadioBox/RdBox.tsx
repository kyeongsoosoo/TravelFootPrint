import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TtransportType } from '../../../../lib/types';
import { transportType } from '../../../../redux/distance/action';

import S from './RdBox.styled';
import RdBoxInp from './RdBoxInp/RdBoxInp';
import useRdBox from './useRdBox';

function RdBox() {
  const { setTransportType } = useRdBox();

  const allTransport = ['motorcycle', 'walk/Bike'];

  const [selectedInp, setSelect] = useState<TtransportType>('motorcycle');

  const handleInpClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains('radio-inp')) {
      setSelect(target.id as TtransportType);
      setTransportType(selectedInp);
    }
  };

  const renderInp = useCallback(
    item => {
      console.log(selectedInp == item);
      return <RdBoxInp key={item} id={item} isSelected={selectedInp == item} />;
    },
    [selectedInp],
  );

  return (
    <S.RdBoxWrapper onClick={handleInpClick}>
      {allTransport.map(renderInp)}
    </S.RdBoxWrapper>
  );
}

export default RdBox;
