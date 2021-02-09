import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const TransSelectWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TransSelectTitle = styled.h1`
  font-size: ${props => props.theme.titleSize};
  font-weight: 800;
`;

export default {
  TransSelectWrapper,
  TransSelectTitle,
};
