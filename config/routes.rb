Rails.application.routes.draw do
  get 'app', to: 'react_page#index'
  get 'app/*path', to: 'react_page#index'
  
  devise_for :users
  resources :users do
    resources :articles do
      resources :comments
    end
  end
  # Defines the root path route ("/")
  get 'users/:user_id/articles/query/:args', to: 'articles#index', as:"queryarticles"
  get 'users/:user_id/articles/myarticles', to: 'articles#show_my_articles', as: 'myarticles'
  # get "/articles", to:"articles#index"
  # get "/articles/:id", to:"articles#show"
    
end
