import { useDispatch, useSelector } from 'react-redux';
import { OffsetType } from '../../../../Constant/OffsetType';
import { IOffset, OffsetSelectType, SelectType } from '../../../../lib/types';
import { RootState } from '../../../../redux';
import {
  minusOffsetCount,
  plusOffsetCount,
} from '../../../../redux/offset/actions';

export function useOffsetCount() {
  const OffsetList = useSelector((state: RootState) => state.offset);

  const DailyList = useSelector((state:RootState) => state.daily);

  const DrivingCost = useSelector((state:RootState) => state.distance.total);

  const DailyValueList = Object.values(DailyList).map(item => item.category);

  const OffsetQuestion = OffsetType.filter((item:OffsetSelectType) => DailyValueList.includes(item.category));

  const DrvingCheckedQuestion = (DrivingCost ? OffsetQuestion.map(item => {
    if(item.category === 'isDriving')
      item.cost = parseInt(DrivingCost,10);
    return item;
  }) 
    : OffsetQuestion
  )

  const dispatch = useDispatch();
  const setOffsetPlus = (offset: OffsetSelectType) => {
    dispatch(plusOffsetCount(offset));
  };
  const setOffsetMinus = (offset: OffsetSelectType) => {
    dispatch(minusOffsetCount(offset));
  };

  return {
    OffsetList,
    setOffsetMinus,
    setOffsetPlus,
    OffsetQuestion : DrvingCheckedQuestion,
  };
}
