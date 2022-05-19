class AddIndexToGooglePlacesIdColumn < ActiveRecord::Migration[6.0]
  def change
    add_index :lunch_places, [:google_places_id, :user_id], unique: true
  end
end
