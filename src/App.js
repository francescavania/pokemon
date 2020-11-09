import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Detail, MyPokemon } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/mypokemon" component={MyPokemon} exact />
            <Route path="/:detail" component={Detail} exact />
          </Switch>
        </main>
      </BrowserRouter >
    )
  }
}
