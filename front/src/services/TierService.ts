import TierListJson from '../Tier.json';

type TierType = {
  range: number[];
  place: string;
};

interface ITierService {
  TierList: TierType[];
  getTier: () => TierType;
}

class TierService implements ITierService {
  TierList: TierType[];
  private Tier;

  constructor(private totalSum: number) {
    this.TierList = TierListJson;
  }

  getTier() {
    this.TierList.some(item => {
      const startWith = item.range[0];
      const endWith = item.range[1];
      if (this.totalSum >= startWith && this.totalSum <= endWith) {
        this.Tier = item.place;
        return true;
      }
    });
    return this.Tier;
  }
}
