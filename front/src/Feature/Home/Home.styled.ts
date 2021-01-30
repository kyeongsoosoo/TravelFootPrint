import styled, { css } from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const HomeTitleBox = styled.section`
  ${flexCenter}
  width: 100%;
  height: 30%;
`;

const HomeTitleTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
`;

const HomeHookBox = styled.section`
  ${flexCenter}
  width: 100%;
  height: 50%;
`;

const HomeHookContent = styled.div`
  width: 80%;
  height: 80%;
`;

const HomeBottomBox = styled.section`
  ${flexCenter}
  width: 100%;
  height: 20%;
`;

export default {
  HomeWrapper,
  HomeTitleBox,
  HomeHookBox,
  HomeBottomBox,
  HomeTitleTitle,
  HomeHookContent,
};
