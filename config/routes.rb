Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'users/:user_id/articles/myarticles', to: 'articles#show_my_articles', as: 'myarticles'
  resources :users do
    resources :articles do
      resources :comments
    end
  end
  # Defines the root path route ("/")
  root "articles#index"
  # get "/articles", to:"articles#index"
  # get "/articles/:id", to:"articles#show"
    
end
