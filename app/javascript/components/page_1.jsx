import React from 'react'

import { routes, Link } from 'utils/routes'

export default class Page1 extends React.Component {

  render() {
    return (
      <div>
        <h1>Page 1</h1>
        <Link to={routes.root}>Home PAge</Link>
      </div>
    )
  }

}
