export interface ISelectedContainer {
  name: string;
  weight: number;
}

export interface ICord {
  x: string;
  y: string;
}

export enum LocationType {
  departure,
  arrival,
}

export interface IDriving {
  start: ICord;
  goal: ICord;
}

export type SelectType = {
  name: string;
  cost: number | boolean;
  description?: string;
  category: SelectionCategory;
};

export type SelectionCategory =
  | '배달 음식'
  | 'isDriving'
  | '커피 마시기'
  | '고기 먹기'
  | '스트리밍 시청하기'
  | '컴퓨터 사용하기'
  | '전구 켜놓기';

export type TtransportType = 'motorcycle' | 'walk/Bike';

export interface IOffset {
  offsetWay: string;
  idx: number;
  detail: {
    description: string;
    assumption: string;
    weight: number;
  };
}
