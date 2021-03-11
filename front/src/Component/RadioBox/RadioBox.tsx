import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useSingleSelect from '../../hook/useSingleSelect';
import { SelectType, TtransportType } from '../../lib/types';
import { transportType } from '../../redux/distance/action';

import S from './RdBox.styled';
import RdBoxInp from './RdBoxInp/RdBoxInp';
import useRdBox from './useRadioBox';

type RadioBoxType = {
  choices: SelectType[];
  setStorage: (item: SelectType) => void;
};

function RadioBox({ choices, setStorage }: RadioBoxType) {
  const { selectedItem, setSelected } = useSingleSelect(choices[0]);

  const handleInpClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const selectedInfo = choices.find(item => item.name === target.id);
    if (target.classList.contains('radio-inp')) {
      setSelected(target.id);
      setStorage(choices[0] || selectedInfo);
    }
  };

  const renderInp = useCallback(
    (item: SelectType) => {
      return (
        <RdBoxInp
          key={item.name}
          id={item.name}
          isSelected={selectedItem === item.name}
        />
      );
    },
    [selectedItem],
  );

  return (
    <S.RdBoxWrapper onClick={handleInpClick}>
      {choices.map(renderInp)}
    </S.RdBoxWrapper>
  );
}

export default RadioBox;
