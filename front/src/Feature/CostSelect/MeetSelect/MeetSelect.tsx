import React from "react";
import LinkBox from "../../../Component/NavBox/NavBox";
import RadioBox from "../../../Component/RadioBox/RadioBox";
import SelectFrame from "../../../Component/SelectFrame/SelectFrame";
import { CoffeType, MeetType } from "../../../Constant/DailyType";
import { PaginationInfo } from "../../../Constant/Page";
import useDailySelect from "../useDailySelect";
import useCarSelect from "../CarSelect/useCarSelect";

function MeetSelect() {
  const { setSelectedItem } = useDailySelect();

  return (
    <SelectFrame
      title="오늘 몇인분의 고기를 드셨나요?"
      pageNum={PaginationInfo.Meet}
    >
      <RadioBox choices={MeetType} setStorage={setSelectedItem}></RadioBox>
      <LinkBox prevLink="/select/coffee" nextLink="/select/streaming" />
    </SelectFrame>
  );
}

export default MeetSelect;
