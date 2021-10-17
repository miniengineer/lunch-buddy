class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable


  # it's either :validatable from device or validates :email, uniqueness: true
  # having both of them causes two validations and two error messages in ActiveModel::Errors
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
