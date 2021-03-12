import React from 'react';
import LinkBox from '../../../Component/NavBox/NavBox';
import RadioBox from '../../../Component/RadioBox/RadioBox';
import SelectFrame from '../../../Component/SelectFrame/SelectFrame';
import { isDrivingType } from '../../../Constant/isDrivingType';
import useTestSelect from '../TestSelect/useTestSelect';
import useCarSelect from './useCarSelect';

function CarSelect() {
  const { checkIsDriving, isDriving } = useCarSelect();

  return (
    <SelectFrame title="오늘 하루 자가용을 이용하셨나요?" pageNum={2}>
      <RadioBox choices={isDrivingType} setStorage={checkIsDriving}></RadioBox>
      <LinkBox
        prevLink="/select/food"
        nextLink={isDriving ? '/select/driving' : '/result/semi'}
      />
    </SelectFrame>
  );
}

export default CarSelect;
