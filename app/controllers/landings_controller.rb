class LandingsController < ApplicationController
  
  #caches_action :index
  
  def index
    gon.locations = Location.all
    gon.counties = County.all
  end
end
