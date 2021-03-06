Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :availabilities
    resources :services
    resources :posts
    resources :reservations
    resources :client_infos
    resources :users
  end
end
