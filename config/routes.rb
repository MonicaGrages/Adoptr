Rails.application.routes.draw do
  get 'favorites/index'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # resources :groups, except: [:new, :edit]

  get 'home/index'

  get "/pet_search", to: "pet_searches#index"
  root "home#index"

  get'/users/:userId/favorites', to: "favorites#index"

end
