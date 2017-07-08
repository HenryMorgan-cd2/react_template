import React from 'react'
import { connect } from 'react-redux'

import { routes, Link } from 'utils/routes'
import { get_articles, fetch_articles, is_fetching, is_fetched } from 'ducks/articles'

@connect((state, props) => {
  return {
    articles: get_articles(state),
  }
}, (dispatch) => {
  return {
    fetch_articles: () => dispatch(fetch_articles())
  }
})
export default class Article extends React.Component {

  componentDidMount() {
    this.props.fetch_articles()
  }

  render() {
    let name, body
    if (this.props.articles.length > 0) {
      name = this.props.articles[this.props.match.params.id - 1].name
      body = this.props.articles[this.props.match.params.id - 1].body
    }
    return (
      <div>
        <Link to={routes.root}>Home PAge</Link>
        <h1>{name}</h1>
        <p>{body}</p>
      </div>
    )
    // {this.props.articles.map(article => article.name)}
  }

}
