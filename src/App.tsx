import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:server/:nickname" children={<Out />} />
        </Switch>
      </div>
    </Router>
  );
};

function Out() {
  let { server, nickname } = useParams();

  return (
    <div>
      <div className="text">
        <span>{server} / {nickname}</span>
      </div>

      <div className="area" />
    </div>
  );
}

export default App;
