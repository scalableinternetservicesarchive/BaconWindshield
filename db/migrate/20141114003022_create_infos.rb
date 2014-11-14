class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.string :day
      t.string :hour
      t.string :shape
      t.string :shape_detail
      t.string :shape_full
      t.integer :size
      t.integer :location_id

      t.timestamps
    end
  end
end
