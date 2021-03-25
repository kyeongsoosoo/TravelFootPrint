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

const HomeIconBox = styled.div`
  ${flexCenter}
  ${responsiveSize(425, 360, 300, 260)}
  background-image: url(${MainIcon});
  background-position: center;
  background-repeat: no-repeat;
`;

const HomeHookBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${responsiveSize(425, 50, 300, 30)}
  text-algin: center;
  ${props => props.theme.btnFont}
  letter-spacing: 0.2px;
  line-height: 1.3;
  margin: 10px 0px;
`;

const HomeBtnBox = styled.section`
  ${flexCenter};
`;

export default {
  HomeWrapper,
  HomeIconBox,
  HomeHookBox,
  HomeBtnBox,
};
