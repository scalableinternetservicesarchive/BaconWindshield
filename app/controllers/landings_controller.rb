class LandingsController < ApplicationController
  def index
    result = request.location
  
    #in dev and test environments, lat & long are 0.0
    if (result.latitude != 0.0 && result.latitude != 0.0)
      loc = Location.new(latitude: result.latitude, longitude: result.longitude)
      nearest = loc.nearbys(50)
      @nearbys = nearest.first(5)
      
      allbest = nearest
      allbest.sort_by { |a| a.name }
      @bestspots = allbest.first(5)
      
    else
      loc = Location.new(latitude: 34.42, longitude: -119.86)
      nearest = loc.nearbys(50)
      @nearbys = nearest.first(5)
      
      allbest = nearest
      # allbest.sort_by { |a| a.infos.swell_rating }
      @bestspots = allbest.first(5)
      # @nearbys = Location.near(loc, 50, select: "locations.*, infos.*").joins(:infos).first(5)
    end
    
    
    
    if defined?(Devise)
      if user_signed_in?
        @favorites = current_user.favorites.limit(5)
      end
    end
    
    #fresh_when(etag: [@nearbys, @favorites, current_user])

  end

# def location
# if params[:location].blank?
# if Rails.env.test? || Rails.env.development?
# @geolocation ||= Geocoder.search("50.78.167.161").first
# else
# @geolocation ||= request.location
# end
# else
# params[:location].each {|l| l = l.to_i } if params[:location].is_a? Array
# @geolocation ||= Geocoder.search(params[:location]).first
# @geolocation
# end
# end

end