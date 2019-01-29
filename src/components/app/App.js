import React from 'react'

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import CardPage from '../pages/CardPage'
import ShopHeader from "../shop-header";

const App = () => {
  return(
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/card' component={CardPage}/>
      </Switch>
    </main>
  )
}

export default App