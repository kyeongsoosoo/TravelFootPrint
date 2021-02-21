import styled, { css } from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';
import MainIcon from '../../lib/image/main.svg';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85vh;
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
  width: 60vw;
  max-width: 500px;
  height: 20%;
  ${props => props.theme.smallFont}
  letter-spacing: 0.2px;
  line-height: 1.3;
  margin: 20px 0px;
`;

const HomeBtnBox = styled.section`
  height: 20%;
  width: 50%;
  ${flexCenter}
`;

export default {
  HomeWrapper,
  HomeIconBox,
  HomeIconIcon,
  HomeHookBox,
  HomeBtnBox,
};
