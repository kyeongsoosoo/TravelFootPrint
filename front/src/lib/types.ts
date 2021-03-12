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
  category: SelectionCategory;
};

export type SelectionCategory = 'Food' | 'isDriving';

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
