class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]
  respond_to :js, :html
  helper_method :get_swell_json_with_spot_id, :get_json
  require 'net/http'
  
  def index
    @locations = Location.all
    respond_with(@locations)
  end

  def show
    respond_with(@location)
  end

  def new
    @location = Location.new
    respond_with(@location)
  end

  def edit
  end

  def create
    @location = Location.new(location_params)
    @location.save
    respond_with(@location)
  end

  def update
    @location.update(location_params)
    respond_with(@location)
  end

  def destroy
    @location.destroy
    respond_with(@location)
  end
  
  def get_json(url)
    uri = URI.parse(url)
    response = Net::HTTP.get_response(uri)
    data = response.body
    result = JSON.parse(data)
    return result    
  end
  
  def get_swell_json_with_spot_id(id)
    get_json('http://www.spitcast.com/api/spot/forecast/' + id.to_s + '/')
  end  

  private
    def set_location
      @location = Location.find(params[:id])
    end

    def location_params
      params.require(:location).permit(:name)
    end
end
