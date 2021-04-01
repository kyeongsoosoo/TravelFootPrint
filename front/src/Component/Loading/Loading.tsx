import React from "react";
import S from "./Loading.styled";
import { FaSpinner } from "react-icons/fa";
import { randomGenFunc } from "../../services/RandomGenService";
import { loadingScript } from "../../Constant/LoadingScript";

function Loading() {
  const scriptLength = loadingScript.length;

  const randomIdx = randomGenFunc(scriptLength);

  return (
    <S.LoadingWrapper>
      <S.LoadingSpinner />
      <S.LoadingBox>
        <S.LoadingText>알고 계셨나요?</S.LoadingText>
        <S.LoadingTextBox>{loadingScript[randomIdx]}</S.LoadingTextBox>
      </S.LoadingBox>
    </S.LoadingWrapper>
  );
}

export default Loading;
