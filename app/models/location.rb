class Location < ActiveRecord::Base
  belongs_to :county
  has_many :favorites
  has_many :infos
end
