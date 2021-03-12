import React from 'react';
import { Route, Switch } from 'react-router';
import CarSelect from './CarSelect/CarSelect';
import Distance from './DistanceSelect/Distance';
import TestSelect from './TestSelect/TestSelect';

function CostSelect() {
  return (
    <Switch>
      <Route path="/select/food" exact component={TestSelect} />
      <Route path="/select/isDriving" exact component={CarSelect} />
      <Route path="/select/Driving" exact component={Distance} />
    </Switch>
  );
}

export default CostSelect;
