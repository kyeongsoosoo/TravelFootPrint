import { useDispatch, useSelector } from 'react-redux';
import { IOffset } from '../../../../lib/types';
import { RootState } from '../../../../redux';
import {
  minusOffsetCount,
  plusOffsetCount,
} from '../../../../redux/offset/actions';

export function useOffsetCount() {
  const offsetCount = useSelector((state: RootState) => state.offset);

  const dispatch = useDispatch();
  const setOffsetPlus = (offset: IOffset) => {
    dispatch(plusOffsetCount(offset));
  };
  const setOffsetMinus = (offset: IOffset) => {
    dispatch(minusOffsetCount(offset));
  };

  return {
    offsetCount,
    setOffsetMinus,
    setOffsetPlus,
  };
}
