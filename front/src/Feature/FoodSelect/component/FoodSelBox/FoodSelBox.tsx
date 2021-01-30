import React, { useState } from 'react';
import S from './FoodSelBox.styled';
import FSBsidebar from './FSBsidebar/FSBsidebar';
import FoodList from '../../Food.json';
import FM from './FoodMain/FM';

function FoodSelBox() {
  const foodIdx = FoodList.map(i => i.idx);

  const [selectedIdx, setSelect] = useState(0);

  return (
    <S.FSBoxWrapper>
      <FSBsidebar
        foodList={foodIdx}
        selectName={selectedIdx}
        setSetlect={setSelect}
      />
      <FM selectedIdx={selectedIdx} />
      {console.log()}
    </S.FSBoxWrapper>
  );
}

export default FoodSelBox;
