Rails.application.routes.draw do
  devise_for :users, path: 'api/v1/users', controllers: { sessions: 'api/v1/sessions', registrations: 'api/v1/registrations' }

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  root 'pages#index'


  get '*path', to: 'pages#index', via: :all
end
