import React, { useState } from 'react';
import S from './FoodSelect.styled';
import FoodSelBox from './component/FoodSelBox/FoodSelBox';
import Button from '../../Component/Button/Button';
import { Link } from 'react-router-dom';
import LinkBox from '../../Component/LinkBox/LinkBox';

function FoodSelect() {
  return (
    <S.FoodSelectWrapper>
      <S.FoodSelectTitle> 사용하신 용기를 골라주세요.</S.FoodSelectTitle>
      <FoodSelBox />
      <LinkBox prevLink="/" nextLink="/select/distance" />
    </S.FoodSelectWrapper>
  );
}

export default FoodSelect;
