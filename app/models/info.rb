class Info < ActiveRecord::Base
  belongs_to :location, touch: true
end