import React, { lazy } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import Home from "./Feature/Home/Home";
import S from "./App.styled";

import SemiResult from "./Feature/SemiResult/SemiResult";

// import FinalResult from "./Feature/FinalResult/FinalResult";

import CostSelect from "./Feature/CostSelect/CostSelect";
import FinalResult from "./Feature/FinalResult/FinalResult";

const Final = lazy(() => import("./Feature/FinalResult/FinalResult"));

function App() {
  const history = useHistory();
  const handleHomeLink = () => {
    history.push("/");
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
          <Route path="/" exact component={Home} />
          <Route path="/select" component={CostSelect} />
          <Route path="/result/semi" exact component={SemiResult} />
          <Route path="/result/final" exact component={Final} />
          <Redirect to='/'/>
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
                Copyright &copy; 2021 여행의 발자국 All Rights Reserved
              </p>
            </S.AppFooter>
          )}
        />
        <Route
          path="/result/final"
          exact
          render={() => (
            <S.AppFooter>
              <p style={{ margin: 0 }}>Directed by Dongwook Kim</p>
              <p style={{ margin: 0 }}>Developed by Kyeongsoo Kim</p>
              <p style={{ margin: 0 }}>Designed by Doyoon Lee</p>
              <br />
              <p style={{ margin: 0 }}>
                Copyright &copy; 2021 여행의 발자국 All Rights Reserved
              </p>
            </S.AppFooter>
          )}
        />
      </Switch>
    </S.AppWrapper>
  );
}

export default App;
