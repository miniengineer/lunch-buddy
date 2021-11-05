class Api::V1::PostsController < ApplicationController
  def index
    render json: { 'posts': 'ok' }
  end
end
