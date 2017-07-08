export { Link, NavLink, Redirect } from 'react-router-dom'

import full_routes from 'config/routes'
export default full_routes

export const routes = full_routes.reduce((all, route) => {
  if (route.as) {
    // TODO: if path has variables then make the route as a function accepting arguments or named object
    all[route.as] = route.path
  } else if (route.path === '/') {
    all.root = route.path
  }
  return all
}, {article_path: (id) => (`/articles/${id}`)})
