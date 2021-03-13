import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Home from './Feature/Home/Home';
import S from './App.styled';
import FoodSelect from './Feature/FoodSelect/FoodSelect';
import Distance from './Feature/CostSelect/DistanceSelect/Distance';
import TransSelect from './Feature/TransSelect/TransSelect';
import SemiResult from './Feature/SemiResult/SemiResult';
import OffsetSelect from './Feature/OffsetSelect/OffsetSelect';
import FinalResult from './Feature/FinalResult/FinalResult';

import CostSelect from './Feature/CostSelect/CostSelect';

function App() {
  const history = useHistory();
  const handleHomeLink = () => {
    history.push('/');
  };
  console.log('test용 입력');

  return (
    <S.AppWrapper>
      <Switch>
        <Route
          path="/:notmain"
          render={() => <S.AppHeader onClick={handleHomeLink} />}
        />
      </Switch>
      <S.AppMain>
        <Switch>
          <Route path="/select" component={CostSelect} />
          <Route path="/select/offset" exact component={OffsetSelect} />
          <Route path="/result/semi" exact component={SemiResult} />
          <Route path="/result/final" exact component={FinalResult} />
          <Route path="/" exact component={Home} />
        </Switch>
      </S.AppMain>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <S.AppFooter>
              <p style={{ margin: 0 }}>Directed by Dongwook Kim</p>
              <p style={{ margin: 0 }}>Developed by Kyeongsoo Kim</p>
              <p style={{ margin: 0 }}>Designed by Doyoon Lee</p>
              <br />
              <p style={{ margin: 0 }}>
                Copyright &copy; 2021 탄소의 민족 All Rights Reserved
              </p>
            </S.AppFooter>
          )}
        />
      </Switch>
    </S.AppWrapper>
  );
}

export default App;
