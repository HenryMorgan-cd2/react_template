import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from 'utils/store'

export default class Application extends React.Component {

  render() {
    return (
      <Provider store={store}>

        <h2>asd</h2>
      </Provider>
    )
  }

}
