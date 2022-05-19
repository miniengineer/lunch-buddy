# frozen_string_literal: true

class LunchPlace < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :google_places_id, presence: true, uniqueness: { scope: :user }
end
