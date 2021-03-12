import React from 'react';
import MultiSelectBox from '../../../Component/MultiSelectBox/MultiSelectBox';
import LinkBox from '../../../Component/NavBox/NavBox';
import RadioBox from '../../../Component/RadioBox/RadioBox';
import SelectFrame from '../../../Component/SelectFrame/SelectFrame';
import { FoodType } from '../../../Constant/FoodType';
import useTestSelect from './useTestSelect';

function TestSelect() {
  const { setTest } = useTestSelect();

  return (
    <SelectFrame title="자가용?" pageNum={2}>
      <MultiSelectBox choices={FoodType} setStorage={setTest} />
      <LinkBox prevLink="/" nextLink="/select/isDriving" />
    </SelectFrame>
  );
}

export default TestSelect;
