import React from 'react';
import { useHistory } from 'react-router';
import S from './Button.styled';

interface IButton {
  width: number;
  height: number;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  to?: string;
}

function Button(props: IButton)  {
  const history = useHistory();
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (props.onClick) {
      props.onClick(event);
    }
    if (props.to) {
      history.push(props.to);
      console.log(props.to);
    }
  };
  return (
    <S.ButtonWrapper
      width={props.width}
      height={props.height}
      onClick={handleClick}
    >
      {props.children}
    </S.ButtonWrapper>
  );
}

export default Button;
