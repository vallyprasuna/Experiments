import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Navbar, List } from '../Components'
import { Hooks, Init, Concepts } from '../Pages'
import './Styles/Landing.css'

function Landing() {
  return (
    <div className="Landing">
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
        <Route
          exact path='/Concepts'
          render={() => <Concepts/>}
        />
        </Switch>
      </Router>
    </div>
  );
}

export default Landing;
