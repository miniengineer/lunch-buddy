# frozen_string_literal: true

class LunchPlace < ApplicationRecord
  belongs_to :user

  validates :google_places_id, uniqueness: true
end
