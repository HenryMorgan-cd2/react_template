import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from "redux-logger"

import reducers from './reducers'

const reducer = combineReducers(reducers)

const middleare = [
  thunk
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(
  applyMiddleware(...middleare)
));
