import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import BookstoreService from './services/bookstore-service'
import { BookstoreServiceProveider } from './components/bookstore-service-context'

import store from './store'

const bookstoreService = new BookstoreService()

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProveider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProveider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)