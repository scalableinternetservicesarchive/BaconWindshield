class LandingsController < ApplicationController
   
  def index
    @locations = Location.all
    @counties = County.all
    @favorites = Favorite.all
    gon.watch.locations = @locations
    gon.watch.counties = @counties
    gon.watch.favorites = @favorites
  end
end
