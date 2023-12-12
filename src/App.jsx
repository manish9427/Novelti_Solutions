// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <h1>Hello</h1>
      {/* <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/create" component={UserForm} />
        <Route path="/edit/:userId" component={UserForm} />
      </Switch> */}
    </Router>
  );
}

export default App;
