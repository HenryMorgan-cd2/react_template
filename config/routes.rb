Rails.application.routes.draw do

  namespace :api do
    resources :articles, only: [:index]
  end

  get 'articles/:id', to: 'pages#app'
  get 'articles', to: 'pages#app'
  get 'page1', to: 'pages#app'
  root to: 'pages#app'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
