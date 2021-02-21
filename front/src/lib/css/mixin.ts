import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const titleFont = css`
  /* PC (해상도 1024px)*/
  @media all and (min-width: 1024px) {
    font-size: 48px;
  }

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 36px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 24px;
  }
  font-weight: 800;
`;

export const middleTextFont = css`
  /* PC (해상도 1024px)*/
  @media all and (min-width: 1024px) {
    font-size: 24px;
  }

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 12px;
  }
  font-weight: 600;
`;

export const smallTextFont = css`
  /* PC (해상도 1024px)*/
  @media all and (min-width: 1024px) {
    font-size: 16px;
  }

  /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    font-size: 10px;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    font-size: 8px;
  }
`;
