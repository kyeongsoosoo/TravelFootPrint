import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const DistanceWrapper = styled.main`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const DistanceTitle = styled.h1`
  font-size: ${props => props.theme.titleSize};
  font-weight: 800;
`;

export default {
  DistanceWrapper,
  DistanceTitle,
};
