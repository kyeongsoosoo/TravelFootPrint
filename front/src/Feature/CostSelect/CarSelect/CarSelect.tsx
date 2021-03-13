import React from 'react';
import LinkBox from '../../../Component/NavBox/NavBox';
import RadioBox from '../../../Component/RadioBox/RadioBox';
import SelectFrame from '../../../Component/SelectFrame/SelectFrame';
import { isDrivingType } from '../../../Constant/isDrivingType';
import { PaginationInfo } from '../../../Constant/Page';
import useTestSelect from '../FoodSelect/useFoodSelect';
import useCarSelect from './useCarSelect';

function CarSelect() {
  const { checkIsDriving, isDriving } = useCarSelect();

  return (
    <SelectFrame
      title="오늘 하루 자가용을 이용하셨나요?"
      pageNum={PaginationInfo.isDriving}
    >
      <RadioBox choices={isDrivingType} setStorage={checkIsDriving}></RadioBox>
      <LinkBox
        prevLink="/select/lighttime"
        nextLink={isDriving ? '/select/driving' : '/result/semi'}
      />
    </SelectFrame>
  );
}

export default CarSelect;
