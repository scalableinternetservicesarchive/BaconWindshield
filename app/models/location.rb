class Location < ActiveRecord::Base
  belongs_to :county
  has_many :favorites
  has_many :infos

  reverse_geocoded_by :latitude, :longitude
  after_validation :geocode
end
