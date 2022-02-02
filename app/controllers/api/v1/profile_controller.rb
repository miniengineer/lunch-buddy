# frozen_string_literal: true

module Api
  module V1
    class ProfileController < ApplicationController
      before_action :authenticate_user!

      def index
        if user_signed_in?
          render json: { message: 'OK' }, status: :ok
        else
          render json: { message: 'not OK' }, status: :unauthorized
        end
      end
    end
  end
end
