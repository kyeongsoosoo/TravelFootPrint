import styled from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

interface IFSBsidebarContentProp {
  isClicked: boolean;
}

const FSBSdiebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const FSBSiderbarContent = styled.article<IFSBsidebarContentProp>`
  ${flexCenter}
  width: 80%;
  height: 15%;
  ${props => props.theme.middleFont}
  background-color: ${({ isClicked }) => (isClicked ? `green` : 'white')};
  border-radius: 5px;
  cursor: pointer;
  & + & {
    margin-top: 10px;
  }
`;

export default { FSBSdiebarWrapper, FSBSiderbarContent };
