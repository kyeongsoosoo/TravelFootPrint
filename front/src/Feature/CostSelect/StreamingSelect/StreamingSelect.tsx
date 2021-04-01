import React from "react";
import LinkBox from "../../../Component/NavBox/NavBox";
import RadioBox from "../../../Component/RadioBox/RadioBox";
import SelectFrame from "../../../Component/SelectFrame/SelectFrame";
import { StreamingType } from "../../../Constant/DailyType";
import { PaginationInfo } from "../../../Constant/Page";
import useDailySelect from "../useDailySelect";

function StreamingSelect() {
  const { setSelectedItem } = useDailySelect();

  return (
    <SelectFrame
      title="오늘 영상을 얼마나 스트리밍 하셨나요?"
      pageNum={PaginationInfo.Streaming}
    >
      <RadioBox choices={StreamingType} setStorage={setSelectedItem}></RadioBox>
      <LinkBox prevLink="/select/meet" nextLink="/select/computertime" />
    </SelectFrame>
  );
}

export default StreamingSelect;
