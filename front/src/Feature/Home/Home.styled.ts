import styled, { css } from 'styled-components';
import { flexCenter, responsiveSize } from '../../lib/css/mixin';
import MainIcon from '../../lib/assets/logo/main.svg';

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
  ${responsiveSize(425, 360, 320, 260)}
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
  width: 70vw;
  max-width: 500px;
  height: 15vh;
  ${props => props.theme.smallFont}
  letter-spacing: 0.2px;
  line-height: 1.3;
  margin: 20px 0px;
`;

const HomeBtnBox = styled.section`
  ${flexCenter};
`;

export default {
  HomeWrapper,
  HomeIconBox,
  HomeIconIcon,
  HomeHookBox,
  HomeBtnBox,
};
