class LandingsController < ApplicationController
   
  def index
    @locations = Location.all
    @counties = County.all
    @favorites = Favorite.all
    gon.watch.locations = @locations
    gon.watch.counties = @counties
    gon.watch.favorites = @favorites
    @result = request.location.longitude
  end

  def location
    if params[:location].blank?
      if Rails.env.test? || Rails.env.development?
        @geolocation ||= Geocoder.search("50.78.167.161").first
      else
        @geolocation ||= request.location
      end
    else
      params[:location].each {|l| l = l.to_i } if params[:location].is_a? Array
      @geolocation ||= Geocoder.search(params[:location]).first
    @geolocation
    end
  end
  
end
