class CreateLunchPlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :lunch_places do |t|
      t.string :google_places_id, null: false
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end

    say 'table created successfully!'
  end
end
