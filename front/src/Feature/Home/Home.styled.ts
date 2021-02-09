import styled, { css } from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';
import MainIcon from '../../lib/image/main.svg';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120%;
`;

const HomeIconBox = styled.section`
  ${flexCenter}
  width: 100%;
  height: 40%;
`;

const HomeIconIcon = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${MainIcon});
  background-position: contain;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const HomeHookBox = styled.section`
  ${flexCenter}
  flex-direction: column;
  width: 390px;
  height: 20%;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.2px;
  line-height: 1.3;
`;

const HomeBtnBox = styled.section`
  height: 20%;
  width: 100%;
  ${flexCenter}
`;

export default {
  HomeWrapper,
  HomeIconBox,
  HomeIconIcon,
  HomeHookBox,
  HomeBtnBox,
};
