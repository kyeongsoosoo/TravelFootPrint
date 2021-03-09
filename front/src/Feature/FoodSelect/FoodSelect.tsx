import React, { useState } from 'react';
import FoodSelBox from './component/FoodSelBox/FoodSelBox';

import NavBox from '../../Component/NavBox/NavBox';
import SelectFrame from '../../Component/SelectFrame/SelectFrame';

function FoodSelect() {
  return (
    <SelectFrame title="사용하신 용기를 골라주세요">
      <FoodSelBox />
      <NavBox prevLink="/" nextLink="/select/distance" />
    </SelectFrame>
  );
}

export default FoodSelect;
