import { useDispatch } from 'react-redux';
import { IOffset } from '../lib/types';
import { minusOffsetCount, plusOffsetCount } from '../redux/offset/actions';

export function useOffsetCount() {
  const dispatch = useDispatch();
  const setOffsetPlus = (offset: IOffset) => {
    dispatch(plusOffsetCount(offset));
  };
  const setOffsetMinus = (offset: IOffset) => {
    dispatch(minusOffsetCount(offset));
  };

  return [setOffsetPlus, setOffsetMinus];
}
