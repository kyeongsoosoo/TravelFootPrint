import React from 'react';
import Button from '../Button/Button';
import S from './NavBox.styled';

interface ILinkBox {
  prevLink: string;
  nextLink: string;
  nextClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function LinkBox(props: ILinkBox) {
  return (
    <S.LinkBoxWrapper>
      <Button width={200} height={100} to={props.prevLink}>
        이전
      </Button>
      <Button
        width={200}
        height={100}
        to={props.nextLink}
        onClick={props.nextClick}
      >
        다음
      </Button>
    </S.LinkBoxWrapper>
  );
}

export default LinkBox;
