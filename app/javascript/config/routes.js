// route builder helper method
const r = (path, component, options={}) => ({path, component: component.default, exact: true, ...options})

export default [
  r('/', require('../components/root')),
  r('/page1', require('../components/page_1'), {as: 'page1'}),
  r('/articles', require('components/articles'), {as: 'articles'}),
  r('/articles/:id', require('components/article'), {as: 'article'}),
]
