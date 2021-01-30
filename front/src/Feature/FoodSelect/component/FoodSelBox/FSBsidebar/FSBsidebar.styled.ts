import styled from 'styled-components';

interface IFSBsidebarContentProp {
  isClicked: boolean;
}

const FSBSdiebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  width: 20%;
  height: 100%;
`;

const FSBSiderbarContent = styled.article<IFSBsidebarContentProp>`
  width: 100%;
  height: 20%;
  background-color: ${({ isClicked }) => (isClicked ? `white` : 'inherit')};
  border: 1px solid black;
  cursor: pointer;
`;

export default { FSBSdiebarWrapper, FSBSiderbarContent };
