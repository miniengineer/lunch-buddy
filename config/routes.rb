# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, path: 'api/v1/users', controllers:
    {
      sessions: 'api/v1/sessions',
      registrations: 'api/v1/registrations'
    }

  root 'home#index'
  get '*path', to: 'home#index', via: :all
end
