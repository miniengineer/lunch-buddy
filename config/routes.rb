# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, path: 'api/v1/users', controllers:
    {
      sessions: 'api/v1/sessions',
      registrations: 'api/v1/registrations'
    }

  root 'pages#index'
end
