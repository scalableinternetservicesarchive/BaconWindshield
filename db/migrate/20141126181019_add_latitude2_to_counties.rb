class AddLatitude2ToCounties < ActiveRecord::Migration
  def change
    add_column :counties, :latitude2, :float
  end
end
