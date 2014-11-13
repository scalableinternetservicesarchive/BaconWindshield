class AddLatitudeToCounties < ActiveRecord::Migration
  def change
    add_column :counties, :latitude, :float
  end
end
