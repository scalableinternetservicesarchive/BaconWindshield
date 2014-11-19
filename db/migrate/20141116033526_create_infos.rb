class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.string :day
      t.integer :size_min
      t.integer :size_max
      t.integer :wind_direction
      t.integer :wind_speed
      t.integer :temperature
      t.integer :weather
      t.string  :chart_swell
      t.string  :chart_period
      t.string  :chart_wind
      t.integer :swell_rating
      t.float :probability
      t.integer :location_id
      t.timestamps

    end
  end
end
