class County < ActiveRecord::Base
  has_many :locations
  
  #reverse_geocoded_by :latitude, :longitude
  #after_validation :geocode
end
