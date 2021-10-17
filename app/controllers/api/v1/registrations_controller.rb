class Api::V1::RegistrationsController < Devise::RegistrationsController
  before_action :ensure_params_exist, only: :create
  skip_before_action :verify_authenticity_token, :only => :create

  def create
    user = User.new user_params

    # error message wasn't showing up because I was using .save instead of .save!
    # also apparently you can't use rescue without begin
    begin user.save!
      render json: {
        data: { user_id: user.id },
        messages: ['User created successfully']
      }, status: :ok

    # apparently to catch an error related to DB it's necessary to use RecordInvalid
    # Raised by ActiveRecord::Base#save! and ActiveRecord::Base#create! (from the Rails api doc)
    # https://api.rubyonrails.org/v6.1.0/classes/ActiveRecord/RecordInvalid.html


    # this is what you get if you're just using ActiveRecord::RecordInvalid => e
    # pp e
    # => <ActiveRecord::RecordInvalid: Validation failed: Email has already been taken, Email has already been taken>

    # and this is what you get if you're using the proper invalid
    # pp invalid.record.errors
    # => 
    #<ActiveModel::Errors:0x00007ff00d287468
    # @base=
    # #<User id: nil, email: "test@mail.com", created_at: nil, updated_at: nil>,
    # @details=
    # {:email=>
    #   [{:error=>:taken, :value=>"test@mail.com"},
    #     {:error=>:taken, :value=>"test@mail.com"}]},
    # @messages={:email=>["has already been taken", "has already been taken"]}>

    rescue ActiveRecord::RecordInvalid => invalid
      render json: {
        messages: invalid.record.errors.full_messages
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
