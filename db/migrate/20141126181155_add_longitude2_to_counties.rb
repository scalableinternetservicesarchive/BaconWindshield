class AddLongitude2ToCounties < ActiveRecord::Migration
  def change
    add_column :counties, :longitude2, :float
  end
end
