import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import sightings from './reducers'
import App from './App'

const store = createStore(sightings)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)