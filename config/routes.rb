Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get 'app', to: 'react_page#index'
  get 'app/*path', to: 'react_page#index'
  
  devise_for :users
  resources :users do
    resources :articles do
      resources :comments
    end
  end
    
end
