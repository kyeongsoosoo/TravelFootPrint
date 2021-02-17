import styled from 'styled-components';
import { flexCenter } from '../../../../lib/css/mixin';

const OffsetSelectBoxWrapper = styled.main`
  ${flexCenter}
  width: 100%;
  height: 100%;
`;

const OffsetSelectBox = styled.div`
  width: 70%;
  height: 90%;
  border-radius: 25px;
  background-color: white;
`;

const OffsetItemWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 15%;
`;

const OffsetItemTextWrapper = styled.div`
  width: 70%;
  height: 100%;
`;

const OffsetItemTextTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const OffsetItemTextDescript = styled.div`
  font-size: 12px;
  color: ${props => props.theme.fontColor};
`;

export default {
  OffsetSelectBoxWrapper,
  OffsetSelectBox,
  OffsetItemWrapper,
  OffsetItemTextWrapper,
  OffsetItemTextTitle,
  OffsetItemTextDescript,
};
