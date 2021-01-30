import styled from 'styled-components';
import { flexCenter } from '../../../../../../lib/css/mixin';

const FMcontentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const FMcontentPhoto = styled.div`
  width: 100%;
  height: 60%;
`;

const FMcontentCalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
`;

const FMcontentCalMinusBtn = styled.button`
  width: 25%;
  height: 100%;
`;
const FMcontentCalPlusBtn = styled.button`
  width: 25%;
  height: 100%;
`;

const FMcontentCalShowWrapper = styled.div`
  ${flexCenter}
  width: 50%;
  height: 100%;
`;

export default {
  FMcontentWrapper,
  FMcontentPhoto,
  FMcontentCalWrapper,
  FMcontentCalShowWrapper,
  FMcontentCalPlusBtn,
  FMcontentCalMinusBtn,
};
