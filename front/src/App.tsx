import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Home from './Feature/Home/Home';
import S from './App.styled';
import FoodSelect from './Feature/FoodSelect/FoodSelect';
import Distance from './Feature/DistanceSelect/Distance';
import TransSelect from './Feature/TransSelect/TransSelect';
import SemiResult from './Feature/SemiResult/SemiResult';
import OffsetSelect from './Feature/OffsetSelect/OffsetSelect';
import FinalResult from './Feature/FinalResult/FinalResult';

function App() {
  const history = useHistory();
  const handleHomeLink = () => {
    history.push('/');
  };
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
          <Route path="/select/food" exact component={FoodSelect} />
          <Route path="/select/distance" exact component={Distance} />
          <Route path="/select/transport" exact component={TransSelect} />
          <Route path="/select/offset" exact component={OffsetSelect} />
          <Route path="/result/semi" exact component={SemiResult} />
          <Route path="/result/final" exact component={FinalResult} />
          <Route path="/" exact component={Home} />
        </Switch>
      </S.AppMain>
      <S.AppFooter>
        <p style={{ margin: 0 }}>Directed by Dongwook Kim</p>
        <p style={{ margin: 0 }}>Developed by Kyeongsoo Kim</p>
        <p style={{ margin: 0 }}>Designed by Doyoon Lee</p>
        <br />
        <p style={{ margin: 0 }}>
          Copyright &copy; 2021 탄소의 민족 All Rights Reserved
        </p>
      </S.AppFooter>
    </S.AppWrapper>
  );
}

export default App;
