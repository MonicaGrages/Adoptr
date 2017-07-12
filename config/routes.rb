Rails.application.routes.draw do
  get 'favorites/index'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # resources :groups, except: [:new, :edit]

  get 'home/index'

  get "/pet_search/:user_id", to: "pet_searches#index"

  get '/users/:userId/favorites', to: "favorites#index"

  get '/pets/:id', to: "pets#show"

  post '/favorites', to: "favorites#create"

  post '/passes', to: "passes#create"

  delete '/favorites/:id', to: "favorites#delete"

  get '/users/:id', to: "users#show"

  put '/users/:user_id/preferences', to: "preferences#update"

  patch '/users/:user_id/preferences', to: "preferences#increment_pet_views"

  root "home#index"

end
