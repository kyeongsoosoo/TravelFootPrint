import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { fakeClient } from '../../client/client';

export function useHome() {
  const history = useHistory();

  useEffect(() => {
    fakeClient.getFakeReq();
  }, []);

  return {
    history,
  };
}

export default useHome;
