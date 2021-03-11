import React from 'react';
import LinkBox from '../../Component/NavBox/NavBox';
import RadioBox from '../../Component/RadioBox/RadioBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';
import { Food } from '../../Constant/Food';
import useTestSelect from './useTestSelect';

function TestSelect() {
  const { setTest } = useTestSelect();

  return (
    <SelectFrame title="자가용?" pageNum={2}>
      <RadioBox choices={Food} setStorage={setTest} />;
      <LinkBox prevLink="/" nextLink="/select/isDrivng" />
    </SelectFrame>
  );
}

export default TestSelect;
