import React, { useCallback } from 'react';
import S from './FSBsidebar.styled';
import FoodList from '../../../Food.json';

interface IFSBsiderbar {
  foodList: number[];
  selectName: number;
  setSetlect: React.Dispatch<React.SetStateAction<number>>;
}

function FSBsidebar(props: IFSBsiderbar) {
  const renderFoodName = useCallback(
    idx => {
      return (
        <S.FSBSiderbarContent
          key={idx}
          isClicked={props.selectName === idx}
          onClick={() => {
            props.setSetlect(item => idx);
            console.log(name);
          }}
        >
          {FoodList[idx].foodName}
        </S.FSBSiderbarContent>
      );
    },
    [props.selectName],
  );

  return (
    <S.FSBSdiebarWrapper>
      {props.foodList.map(renderFoodName)}
    </S.FSBSdiebarWrapper>
  );
}

export default React.memo(FSBsidebar);
