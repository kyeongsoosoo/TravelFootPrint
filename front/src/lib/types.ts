export interface ISelectedContainer {
  name: string;
  weight: number;
  //TODO
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

export interface SelectType {
  name: string;
  cost: number | boolean;
  description?: string;
  category: SelectionCategory | OffsetCategory;
}

export interface OffsetSelectType extends SelectType {
  unitDescription: string;
  unit: number;
}

export type SelectionCategory =
  | "배달 음식"
  | "자동차 타기"
  | "커피 마시기"
  | "고기 먹기"
  | "스트리밍 시청하기"
  | "컴퓨터 사용하기"
  | "전구 켜놓기";

export type OffsetCategory =
  | "이메일 삭제"
  | "이면지 사용"
  | "컵 홀더 사용 안하기"
  | "버스 이용"
  | "지하철 이용"
  | "영상 스트리밍 끄기"
  | "형광등 끄기"
  | "사용 안하는 컴퓨터 끄기";

export type TtransportType = "motorcycle" | "walk/Bike";

export interface IOffset {
  offsetWay: string;
  idx: number;
  detail: {
    description: string;
    assumption: string;
    weight: number;
  };
}
