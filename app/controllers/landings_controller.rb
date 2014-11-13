class LandingsController < ApplicationController
  def index
    gon.locations = Location.all
    gon.counties = County.all
  end
end
