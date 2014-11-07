class Location < ActiveRecord::Base
  belongs_to :county
  has_many :users
end
