module LandingsHelper
  def landings_init
    #begin
      #result = request.location
      result = Location.first(30)
    #rescue
      #result = [0,0]
    #end
    
    #if(result!=nil)
      #in dev and test environments, lat & long are 0.0
      #if (result.latitude != 0.0 && result.longitude != 0.0)
        #loc = Location.new(latitude: result.latitude, longitude: result.longitude)
        #nearest = loc.nearbys(30)

        # @nearbys = Location.near(loc, 50, select: "locations.*, infos.*").joins(:infos).first(5)
        #@nearbys = nearest.first(5)

        @nearbys = result.first(5)
        allbest = result.sort_by { |a| (-a.infos.first.swell_rating*(a.infos.first.size_max + a.infos.first.size_min)/2) }
        #allbest = result.sort_by { |a| (-a.infos.last.swell_rating*(a.infos.first.size_max + a.infos.first.size_min)/2) }
        @bestnearbys = allbest.first(5)
      #else
        #loc = Location.new(latitude: 34.42, longitude: -119.86)
        #nearest = loc.nearbys(30)

        #@nearbys = nearest.first(5)
        #@nearbys = result.first(5)

        #allbest = result.sort_by { |a| (-a.infos.first.swell_rating*(a.infos.first.size_max + a.infos.first.size_min)/2) }
        #@bestnearbys = allbest.first(5)
      #end
    #else
      #loc = Location.new(latitude: 34.42, longitude: -119.86)
      #nearest = loc.nearbys(50)
      #@nearbys = nearest.first(5)
      #@nearbys = result.first(5)

      #allbest = result.sort_by { |a| (-a.infos.last.swell_rating*(a.infos.last.size_max+a.infos.last.size_min)/2) }
      #@bestnearbys = allbest.first(5)
    #end
    

    if defined?(Devise)
      if user_signed_in?
        @favorites = current_user.favorites.limit(5)
      end
    end

  end
end
