Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  devise_for :users

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts

      devise_scope :user do
        post 'sign_up', to: 'registrations#create'
        post 'sign_in', to: 'sessions#create'
      end
    end
  end

  get '*path', to: 'pages#index', via: :all
end
