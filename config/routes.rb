Rails.application.routes.draw do

  get 'home/index'

  get "/pet_search", to: "pet_searches#index"
  root "home#index"

end
