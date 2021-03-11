import React from 'react';
import { Route, Switch } from 'react-router';
import TestSelect from '../TestSelect/TestSelect';

function CostSelect() {
  return (
    <Switch>
      <Route path="/select/food" exact component={TestSelect} />
    </Switch>
  );
}

export default CostSelect;
