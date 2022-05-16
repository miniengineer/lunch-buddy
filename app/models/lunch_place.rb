# frozen_string_literal: true

class LunchPlace < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :google_places_id, uniqueness: true
  validates_uniqueness_of :google_places_id, scope: :user
end
