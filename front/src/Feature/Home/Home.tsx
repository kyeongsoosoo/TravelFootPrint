import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fakeClient } from '../../client/client';
import Button from '../../Component/Button/Button';
import S from './Home.styled';

function Home() {
  const history = useHistory();
  const handleLink = () => {
    history.push('/select/food');
  };

  useEffect(() => {
    fakeClient.getFakeReq();
  }, []);

  return (
    <S.HomeWrapper>
      <S.HomeIconBox>
        <S.HomeIconIcon />
      </S.HomeIconBox>
      <S.HomeHookBox>
        <p>
          코로나 때문에 밖으로 나가지도 못하고, 집 콕 중에 배달 음식을 시켜
          드셨나요?
        </p>

        <br />
        <p>
          배달 음식에 사용 되는 일회용 용기들은 탄소 배출의 원인이 되기도
          합니다.
        </p>
        <br />
        <p>
          오늘 배달 음식을 먹으며 사용한 일회용 용기들을 입력하여 탄소발자국을
          계산해 봅시다!
        </p>
      </S.HomeHookBox>
      <S.HomeBtnBox>
        <Button width={390} height={50} onClick={handleLink}>
          <p style={{ fontSize: '32px', fontWeight: 800, margin: 0 }}>
            계산하기
          </p>
        </Button>
      </S.HomeBtnBox>
    </S.HomeWrapper>
  );
}

export default Home;
