import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Feature/Home/Home';
import S from './App.styled';
import SumBox from './Component/SumBox/SumBox';
import FoodSelect from './Feature/FoodSelect/FoodSelect';

function App() {
  return (
    <S.AppWrapper>
      <S.MainBox>
        <Switch>
          <Route path="/select/food" exact component={FoodSelect} />
          <Route path="/" exact component={Home} />
        </Switch>
      </S.MainBox>
      <Route path="/select" component={SumBox} />
    </S.AppWrapper>
  );
}

export default App;
