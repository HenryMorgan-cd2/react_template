Rails.application.routes.draw do

  get 'page1', to: 'pages#app'
  root to: 'pages#app'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
