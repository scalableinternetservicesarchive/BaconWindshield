class LandingsController < ApplicationController
  def index
    @locations = Location.all
    gon.locations = @locations
  end
end
