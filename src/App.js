import React, { Fragment } from 'react'
import './App.css'
import { Navbar, List } from './Components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//import { Hooks } from './Pages'
import { Hooks, Init } from './Pages'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
        <Route
          exact path='/'
          render={props => (
            <List/>
          )}
        />
        <Route
          exact path='/Hooks'
          render={props => (
            <Hooks/>
          )}
        />
        <Route
          exact path='/Material_UI'
          render={() => <Fragment>Material UI</Fragment>}
        />
        <Route
          exact path='/Singleton'
          render={() => <Init/>}
        />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
