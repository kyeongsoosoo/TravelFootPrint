import React, { useCallback } from 'react';
import useSingleSelect from '../../hook/useSingleSelect';
import { SelectType } from '../../lib/types';

import S from './RdBox.styled';
import RdBoxInp from './RdBoxInp/RdBoxInp';

type RadioBoxType = {
  choices: SelectType[];
  setStorage: (item: SelectType) => void;
};

function RadioBox({ choices, setStorage }: RadioBoxType) {
  const { selectedItem, setSelected } = useSingleSelect(choices[0]);

  const handleInpClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const selectedInfo = choices.find(item => item.name === target.id);
    if (target.classList.contains('radio-inp') && selectedInfo) {
      setSelected(target.id);
      setStorage(selectedInfo);
    }
  };

  const renderInp = useCallback(
    (item: SelectType) => {
      return (
        <RdBoxInp
          key={item.name}
          id={item.name}
          name={item.name}
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
