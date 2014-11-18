class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.string :day
      t.integer :size
      t.integer :swell_rating
      t.float :wind
      t.float :probability
      t.integer :location_id
      t.timestamps
    end
  end
end
