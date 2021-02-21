import TierListJson from '../Tier.json';

type TierType = {
  range: number[];
  place: string;
};

interface ITierService {
  TierList: TierType[];
}

export class TierService implements ITierService {
  TierList: TierType[];
  private Tier: TierType;

  constructor(private totalSum: number) {
    this.TierList = TierListJson;
    this.Tier = getTier(this.totalSum, this.TierList);
  }

  getTier() {
    return this.Tier;
  }
}

function getTier(totalSum: number, TierList: TierType[]) {
  let tier: TierType = {
    range: [0, 2000],
    place: '노벨 광장',
  };
  TierList.some(item => {
    const startWith = item.range[0];
    const endWith = item.range[1];
    if (totalSum >= startWith && totalSum <= endWith) {
      tier = item;
      return true;
    }
  });
  return tier;
}
