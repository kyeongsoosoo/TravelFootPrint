import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const responsiveSize = (
  pcWidth: number,
  pcHeight: number,
  mobileWidth: number,
  mobileHeight: number,
) => css`
  /* PC (해상도 768px)*/
  @media all and (min-width: 768px) {
    width: ${pcWidth}px;
    height: ${pcHeight}px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    width: ${mobileWidth}px;
    height: ${mobileHeight}px;
  }
`;

export const fontSizing = (
  pcSize: number,
  tabletSize: number,
  mobileSize: number,
  fontWeight: number,
) => {
  return css`
    /* PC (해상도 1024px)*/
    @media all and (min-width: 1024px) {
      font-size: ${pcSize}px;
    }

    /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: ${tabletSize}px;
    }

    /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
    @media all and (max-width: 767px) {
      font-size: ${mobileSize}px;
    }

    font-weight: ${fontWeight};
  `;
};

export const btnFont = css`
  font-weight: 700;
`;
