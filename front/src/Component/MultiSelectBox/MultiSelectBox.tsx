import React, { useCallback } from 'react';
import useMultiSelect from '../../hook/useMultiSelect';
import { SelectType } from '../../lib/types';
import RdBoxInp from '../RdBoxInp/RdBoxInp';
import S from './MultiSelectBox.styled';

type RadioBoxType = {
  choices: SelectType[];
  setStorage: (item: SelectType) => void;
};

function MultiSelectBox({ choices, setStorage }: RadioBoxType) {
  const { Selects, handleToggle } = useMultiSelect();

  const handleInpClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const selectedInfo = choices.find(item => item.name === target.id);
    if (target.classList.contains('radio-inp') && selectedInfo) {
      handleToggle(target.id);
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
          isSelected={Selects.includes(item.name)}
        />
      );
    },
    [Selects],
  );

  return (
    <S.RdBoxWrapper onClick={handleInpClick}>
      {choices.map(renderInp)}
    </S.RdBoxWrapper>
  );
}

export default MultiSelectBox;
