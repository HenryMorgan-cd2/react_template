import React from 'react'
import { connect } from 'react-redux'

import { routes, Link } from 'utils/routes'
import { get_articles, fetch_articles, is_fetching, is_fetched } from 'ducks/articles'

@connect(state => ({
  articles: get_articles(state),
  fetching: is_fetching(state),
  fetched: is_fetched(state),
}), (dispatch) => {
  return {
    fetch_articles: () => dispatch(fetch_articles())
  }
})
export default class Page2 extends React.Component {


  componentDidMount() {
    this.props.fetch_articles()
  }

  loading() {
    return this.props.fetching
  }

  renderArticleList() {
    return this.props.articles.map(article => {
      return (<Link key={article.id} to={routes.article_path(article.id)}>{article.name}</Link>)
    })
  }

  render() {
    return (
      <div>
        <Link to={routes.root}>Home PAge</Link>
        <h1>All Articles</h1>
        {this.loading() ? 'Loading' : this.renderArticleList()}
      </div>
    )
    // {this.props.articles.map(article => article.name)}
  }

}
