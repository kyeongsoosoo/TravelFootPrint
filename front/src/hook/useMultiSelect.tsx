import React, { useReducer } from 'react';
import { ActionType, createAction } from 'typesafe-actions';

type MultiSelectState = string[];

type MultiSelectAction = ActionType<typeof actions>;

const SELECT_TOGGLE = 'select/toggle';

const toggleSelect = createAction(SELECT_TOGGLE)<string>();
const actions = { toggleSelect };

function reducer(
  state: MultiSelectState,
  action: MultiSelectAction,
): MultiSelectState {
  switch (action.type) {
    case SELECT_TOGGLE: {
      if (state.includes(action.payload))
        return state.filter(item => item !== action.payload);
      else return state.concat(action.payload);
    }
    default:
      return [];
  }
}

function useMultiSelect() {
  const [Selects, dispatch] = useReducer(reducer, []);
  const handleToggle = item => dispatch(toggleSelect(item));

  return {
    handleToggle,
    Selects,
  };
}

export default useMultiSelect;
