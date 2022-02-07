Rails.application.routes.draw do
  root "pages#index"
  
  devise_for :users
  resources :users do
    resources :articles do
      resources :comments
    end
  end
  
  get '*path', to: "pages#index"
  # Defines the root path route ("/")
  get 'users/:user_id/articles/query/:args', to: 'articles#index', as:"queryarticles"
  get 'users/:user_id/articles/myarticles', to: 'articles#show_my_articles', as: 'myarticles'
  # get "/articles", to:"articles#index"
  # get "/articles/:id", to:"articles#show"
    
end
