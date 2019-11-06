import React from "react";
import "./App.css";
import { Switch, Route, useParams, HashRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route path="/:server/:nickname" children={<Out />} />
        </Switch>
      </div>
    </HashRouter>
  );
};

function Out() {
  let { server, nickname } = useParams();

  return (
    <div>
      <div className="text">
        <span>
          {server} / {nickname}
        </span>
      </div>

      <div className="area" />
    </div>
  );
}

export default App;
