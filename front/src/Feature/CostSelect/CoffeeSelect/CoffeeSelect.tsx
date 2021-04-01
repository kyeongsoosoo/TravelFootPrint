import React from "react";
import LinkBox from "../../../Component/NavBox/NavBox";
import RadioBox from "../../../Component/RadioBox/RadioBox";
import SelectFrame from "../../../Component/SelectFrame/SelectFrame";
import { CoffeType } from "../../../Constant/DailyType";
import { PaginationInfo } from "../../../Constant/Page";
import useDailySelect from "../useDailySelect";
import useCarSelect from "../CarSelect/useCarSelect";

function CoffeeSelect() {
  const { setSelectedItem } = useDailySelect();

  return (
    <SelectFrame
      title="오늘 하루 커피를 몇잔 드셨나요?"
      pageNum={PaginationInfo.Coffee}
    >
      <RadioBox choices={CoffeType} setStorage={setSelectedItem}></RadioBox>
      <LinkBox prevLink="/select/food" nextLink="/select/meet" />
    </SelectFrame>
  );
}

export default CoffeeSelect;
