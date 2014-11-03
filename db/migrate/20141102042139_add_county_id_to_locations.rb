class AddCountyIdToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :county_id, :integer
  end
end
