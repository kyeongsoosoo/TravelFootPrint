import styled from 'styled-components';
import { flexCenter } from '../../../../lib/css/mixin';

const OffsetSelectBoxWrapper = styled.main`
  ${flexCenter}
  width: 100%;
  height: 100%;
`;

const OffsetSelectBox = styled.div`
  display: flex;
  box-sizing: content-box;
  flex-direction: column;
  justify-content: center;
  padding: 5% 2%;
  width: 70vw;
  height: 46vh;
  border-radius: 25px;
  background-color: white;
  overflow-y: scroll;
`;

const OffsetItemWrapper = styled.div`
  display: flex;
  width: 65vw;
  height: 10vh;
`;

const OffsetItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
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
