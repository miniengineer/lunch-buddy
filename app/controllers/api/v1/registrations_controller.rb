# frozen_string_literal: true

module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      # rubocop:disable LexicallyScopedActionFilter
      skip_before_action :verify_authenticity_token
      # rubocop:enable LexicallyScopedActionFilter
    end
  end
end
