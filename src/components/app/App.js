import React from 'react'

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import CardPage from '../pages/CardPage'

const App = () => {
  return(
    <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/card' component={CardPage}/>
    </Switch>
  )
}

export default App