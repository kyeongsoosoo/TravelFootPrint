import React from 'react';
import LinkBox from '../../../Component/NavBox/NavBox';
import RadioBox from '../../../Component/RadioBox/RadioBox';
import SelectFrame from '../../../Component/SelectFrame/SelectFrame';
import {
  CoffeType,
  ComputerTimeType,
  MeetType,
} from '../../../Constant/DailyType';
import { PaginationInfo } from '../../../Constant/Page';
import useDailySelect from '../../../hook/useDailySelect';

function ComputerTimeSelect() {
  const { setSelectedItem } = useDailySelect();

  return (
    <SelectFrame
      title="오늘 컴퓨터를 얼마나 켜두셨나요?"
      pageNum={PaginationInfo.ComputerTime}
    >
      <RadioBox
        choices={ComputerTimeType}
        setStorage={setSelectedItem}
      ></RadioBox>
      <LinkBox prevLink="/select/streaming" nextLink="/select/isDriving" />
    </SelectFrame>
  );
}

export default ComputerTimeSelect;
