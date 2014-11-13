class AddLongitudeToCounties < ActiveRecord::Migration
  def change
    add_column :counties, :longitude, :float
  end
end
