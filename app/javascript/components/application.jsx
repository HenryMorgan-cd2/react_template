import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import store from 'utils/store'

import routes from 'utils/routes'

export default class Application extends React.Component {

  routes() {
    return routes.map(route => (<Route key={route.path} {...route} />))
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {this.routes()}
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }

}
