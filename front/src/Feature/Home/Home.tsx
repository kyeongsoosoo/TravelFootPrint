import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Component/Button/Button';
import S from './Home.styled';

function Home() {
  return (
    <S.HomeWrapper>
      <S.HomeTitleBox>
        <S.HomeTitleTitle>Dong + Soo Project</S.HomeTitleTitle>
      </S.HomeTitleBox>
      <S.HomeHookBox>
        <S.HomeHookContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
          pretium nibh ipsum consequat nisl vel pretium lectus. Orci a
          scelerisque purus semper eget duis. Dolor sit amet consectetur
          adipiscing elit. Viverra tellus in hac habitasse platea dictumst
          vestibulum. Aliquam malesuada bibendum arcu vitae elementum curabitur
          vitae.
        </S.HomeHookContent>
      </S.HomeHookBox>
      <S.HomeBottomBox>
        <Link style={{ width: '40%', height: '40%' }} to="/select/food">
          <Button width={100} height={100}>
            Start
          </Button>
        </Link>
      </S.HomeBottomBox>
    </S.HomeWrapper>
  );
}

export default Home;
