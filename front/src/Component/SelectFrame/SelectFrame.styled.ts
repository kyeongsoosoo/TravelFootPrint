import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const SelectFrameWrapper = styled.main`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  height: 65vh;
  padding-bottom: 20px;
`;

const SelectFrameTitle = styled.h1`
  ${props => props.theme.titleSize}
  letter-spacing: 1px;
`;

export default {
  SelectFrameWrapper,
  SelectFrameTitle,
};
