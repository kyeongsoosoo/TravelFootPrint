import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const SelectFrameWrapper = styled.main`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  height: 70vh;
  padding-bottom: 20px;
`;

const SelectFrameTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export default {
  SelectFrameWrapper,
  SelectFrameTitle,
};
