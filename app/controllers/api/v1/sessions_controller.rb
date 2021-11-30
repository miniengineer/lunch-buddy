# frozen_string_literal: true

module Api
  module V1
    class SessionsController < Devise::SessionsController
      respond_to :json

      skip_before_action :verify_authenticity_token
    end
  end
end
