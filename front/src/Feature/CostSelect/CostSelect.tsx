import React from 'react';
import { Route, Switch } from 'react-router';

import CarSelect from './CarSelect/CarSelect';
import CoffeeSelect from './CoffeeSelect/CoffeeSelect';
import ComputerTimeSelect from './ComputerTime/ComputerTime';
import Distance from './DistanceSelect/Distance';
import FoodSelect from './FoodSelect/FoodSelect';
import LightTimeSelect from './LightTime/LightTime';
import MeetSelect from './MeetSelect/MeetSelect';
import StreamingSelect from './StreamingSelect/StreamingSelect';

function CostSelect() {
  return (
    <Switch>
      <Route path="/select/food" exact component={FoodSelect} />
      <Route path="/select/coffee" exact component={CoffeeSelect} />
      <Route path="/select/meet" exact component={MeetSelect} />
      <Route path="/select/streaming" exact component={StreamingSelect} />
      <Route path="/select/computertime" exact component={ComputerTimeSelect} />
      <Route path="/select/lighttime" exact component={LightTimeSelect} />
      <Route path="/select/isDriving" exact component={CarSelect} />
      <Route path="/select/Driving" exact component={Distance} />
    </Switch>
  );
}

export default CostSelect;
