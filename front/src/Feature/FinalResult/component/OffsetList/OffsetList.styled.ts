import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../../../lib/css/mixin';

const OffsetListWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  ${responsiveSize(600, 0, 300, 0)}
  min-height: 30vh;
  padding: 50px 0;
  margin-bottom: 60px;
`;

const OffsetListTitle = styled.h1`
  font-size: ${({ theme }) => theme.titleSize};
  margin-bottom: 50px;
`;

const OffsetList = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

export default {
  OffsetListWrapper,
  OffsetListTitle,
  OffsetList,
};
