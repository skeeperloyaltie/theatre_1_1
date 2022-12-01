import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as  Switch, Route} from "react-router-dom";
export default function App() {
  return (
    <Switch>
      <Route path='about'>
        <about />
      </Route>
      <Route path='index'>
        <index />
      </Route>
      </Switch>

  )
}

