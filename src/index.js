import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './App'
import './index.css'

const loggerMiddleware = createLogger()

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)