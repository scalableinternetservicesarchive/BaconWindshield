class AddIndexes < ActiveRecord::Migration
  def change
    add_index :infos, :location_id
    add_index :favorites, :location_id
    add_index :favorites, :user_id
    add_index :locations, :county_id
  end
end
