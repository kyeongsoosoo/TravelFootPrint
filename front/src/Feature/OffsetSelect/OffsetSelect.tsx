import React from "react";

import NavBox from "../../Component/NavBox/NavBox";
import SelectFrame from "../../Component/SelectFrame/SelectFrame";

import OffsetSelectBox from "./component/OffsetSelectBox/OffsetSelectBox";

import S from "./OffsetSelect.styled";

function OffsetSelect() {
  return (
    <SelectFrame title="오늘 내가 할 수 있는 일은?">
      <S.OffsetSelectSubTttle>
        하루 탄소발자국을 더 많이 줄일수록 <br />더 멀리 여행을 떠날 수
        있습니다!
      </S.OffsetSelectSubTttle>
      <OffsetSelectBox />
      <S.OffsetExplainBox>
        *줄인 탄소는 여행의 교통수단인 기차의 연료로 사용됩니다.
      </S.OffsetExplainBox>
      <NavBox prevLink="/result/semi" nextLink="/result/final" />
    </SelectFrame>
  );
}

export default OffsetSelect;
