class Api::V1::RegistrationsController < Devise::RegistrationsController
  before_action :ensure_params_exist, only: :create
  skip_before_action :verify_authenticity_token, :only => :create

  def create
    user = User.new user_params

    if user.save
      render json: {
        data: { user_id: user.id },
        messages: ['User created successfully']
      }, status: :ok
    else
      render json: {
        messages: user.errors.full_messages
      }, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def ensure_params_exist
    return if params[:user].present?

    render json: {
      messages: ['Missing params necessary for user registration']
    }, status: :bad_request
  end
end
