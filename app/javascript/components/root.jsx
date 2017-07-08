import React from 'react'

import { routes, Link } from 'utils/routes'


export default class Root extends React.Component {

  render() {
    return (
      <div>
        <h1>Root</h1>
        <Link to={routes.page1} className='asd'>Click Me</Link>
      </div>
    )
  }

}
