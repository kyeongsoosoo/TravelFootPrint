import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fakeClient } from '../../client/client';
import Button from '../../Component/Button/Button';
import S from './Home.styled';
import useHome from './useHome';

function Home() {
  const { history } = useHome();

  const handleLink = () => {
    history.push('/select/food');
  };

  return (
    <S.HomeWrapper>
      <S.HomeIconBox>
        <S.HomeIconIcon />
      </S.HomeIconBox>

      <S.HomeBtnBox>
        <Button width={390} height={100} onClick={handleLink}>
          <p style={{ fontSize: '32px', fontWeight: 800, margin: 0 }}>
            계산하기
          </p>
        </Button>
      </S.HomeBtnBox>
    </S.HomeWrapper>
  );
}

export default Home;
