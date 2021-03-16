import React from 'react';
import MultiSelectBox from '../../../Component/MultiSelectBox/MultiSelectBox';
import LinkBox from '../../../Component/NavBox/NavBox';
import RadioBox from '../../../Component/RadioBox/RadioBox';
import SelectFrame from '../../../Component/SelectFrame/SelectFrame';
import { FoodType } from '../../../Constant/FoodType';
import { PaginationInfo } from '../../../Constant/Page';
import useFoodSelect from './useFoodSelect';

function TestSelect() {
  const { setTest } = useFoodSelect();

  return (
    <SelectFrame
      title="오늘 하루 무엇을 시켜 드셨나요?"
      pageNum={PaginationInfo.Food}
    >
      <MultiSelectBox choices={FoodType} setStorage={setTest} />
      <LinkBox prevLink="/" nextLink="/select/coffee" />
    </SelectFrame>
  );
}

export default TestSelect;
