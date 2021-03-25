import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fakeClient } from '../../client/client';
import { setDailyReset } from '../../redux/daily/action';
import { resetDistance } from '../../redux/distance/action';
import { resetFood } from '../../redux/food/action';
import { resetTotal } from '../../redux/total/action';

export function useHome() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    fakeClient.getFakeReq();
    dispatch(resetDistance());
    dispatch(resetDistance());
    dispatch(setDailyReset());
    dispatch(resetFood());
    dispatch(resetTotal());
  }, []);

  return {
    history,
  };
}

export default useHome;
