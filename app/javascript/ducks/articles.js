import { get } from 'axios'

const FETCH_ARTICLES = 'articles/fetch_articles'
const FETCH_ARTICLES_FULFILLED = 'articles/fetch_articles_fulfilled'
const FETCH_ARTICLES_REJECTED = 'articles/fetch_articles_rejected'

const initialState = {
  articles: [],
  fetching: false,
  fetched: true
}

export const REDUCER_KEY = 'articles'

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {...state, fetching: true, fetched: false}
    case FETCH_ARTICLES_FULFILLED:
      return {...state, fetching: false, fetched: true, articles: action.payload}
    case FETCH_ARTICLES_REJECTED:
      return {...state, fetching: false, fetched: false}
  }
  return state
}

export const fetch_articles = () => (dispatch) => {
  dispatch({type: FETCH_ARTICLES})
  get('/api/articles').then(response => {
    dispatch({type: FETCH_ARTICLES_FULFILLED, payload: response.data})
  }).catch(error => {
    dispatch({type: FETCH_ARTICLES_REJECTED})
  })
}

export function get_articles(state) {
  return state[REDUCER_KEY].articles
}

export function is_fetching(state) {
  return state[REDUCER_KEY].fetching
}

export function is_fetched(state) {
  return state[REDUCER_KEY].fetched
}
