import styled from 'styled-components';
import { flexCenter } from '../../../../../../lib/css/mixin';

const FMcontentWrapper = styled.div`
  width: 100%;
  height: 120px;
`;

const FMcontentPhoto = styled.div`
  ${flexCenter}
  width: 100%;
  height: 60%;
`;

const FMcontentCalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40%;
  padding: 0 20px;
`;

const FMcontentBtn = styled.button`
  width: 20%;
  height: 100%;
  border-radius: 60%;
  border: none;
  background-color: ${props => props.theme.mainColor};
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const FMcontentCalShowWrapper = styled.div`
  ${flexCenter}
  width: 30%;
  height: 100%;
  border: 2px solid black;
  border-radius: 20%;
`;

export default {
  FMcontentWrapper,
  FMcontentPhoto,
  FMcontentCalWrapper,
  FMcontentCalShowWrapper,
  FMcontentBtn,
};
