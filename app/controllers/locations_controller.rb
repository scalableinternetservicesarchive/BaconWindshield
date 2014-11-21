class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]
  respond_to :js, :html
  helper_method :get_swell_json_with_spot_id, :get_json
  #caches_page :index
  caches_action :index, expires_in: 24.hour

  def index
    #@locations = Location.all
    respond_with(@locations)
  end

  def show
    @waves = @location.infos.paginate(page: params[:page], per_page: 7)
    gon.watch.infos = @location.infos
    respond_with(@location)
  end

  def new
    @location = Location.new
    respond_with(@location)
  end

  def edit
    expire_action action: :index
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

  private

  def set_location
    @location = Location.find(params[:id])
  end

  def location_params
    params.require(:location).permit(:name)
  end
end
