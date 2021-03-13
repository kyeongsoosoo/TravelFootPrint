import { useDispatch, useSelector } from 'react-redux';
import { IOffset, OffsetSelectType } from '../../../../lib/types';
import { RootState } from '../../../../redux';
import {
  minusOffsetCount,
  plusOffsetCount,
} from '../../../../redux/offset/actions';

export function useOffsetCount() {
  const OffsetList = useSelector((state: RootState) => state.offset);

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
  };
}
