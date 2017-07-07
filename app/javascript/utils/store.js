import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

const reducer = combineReducers(reducers)

const middleare = [
  ReduxThunk
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(
  applyMiddleware(...middleare)
));
