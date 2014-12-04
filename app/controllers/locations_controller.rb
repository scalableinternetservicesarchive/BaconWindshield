class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]
  respond_to :js, :html
  helper_method :get_swell_json_with_spot_id, :get_json
  #caches_page :index
  #caches_action :index, expires_in: 24.hour

  def index
    #@locations = Location.all
    if params[:search]
      @locations = Location.search(params[:search]).order("created_at ASC")
    else
      @locations = Location.all.order('created_at ASC')
    end
    @entries = @locations.paginate(page: params[:page], per_page: 20)

    respond_with(@locations)
  end

  def show
    begin
      @waves = @location.infos.paginate(page: params[:page], per_page: 8, total_entries: 40)
      gon.watch.infos = @location.infos
      respond_with(@location)
    rescue Exception => msg
      puts msg
    end
    #fresh_when(etag: [@waves, @location, current_user])
    @windValues1 = [[1, "Light air", "#58ACFA"], [2, "Light breeze", "#A9D0F5"], [3, "Gentle breeze", "#58FAF4"], [4, "Moderate breeze", "#9FF781"], [5, "Fresh breeze", "#F4FA58"], [6, "Strong breeze", "#F5D0A9"]] 
    @windValues2 = [[7, "High wind", "#F7BE81"], [8, "Gale", "#FE642E"], [9, "Strong gale", "#FF0000"], [10, "Storm", "#B43104"], [11, "Violent storm", "#B40404"], [12, "Hurricane force", "#8A0808"]]
  end

  def new
    @location = Location.new
    respond_with(@location)
  end

  def edit
    #expire_action action: :index
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
    begin
      @location = Location.find(params[:id])
    rescue
      @fail = true
    end
  end

  def location_params
    params.require(:location).permit(:name)
  end
end
