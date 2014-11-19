class InfosController < ApplicationController
  before_action :set_info, only: [:show, :edit, :update, :destroy]
  respond_to :js, :html

  def index
    @infos = Info.all
    respond_with(@infos)
  end

  def show
    respond_with(@info)
  end

  def new
    @info = Info.new
    respond_with(@info)
  end

  def edit
  end

  def create
    @info = Info.new(info_params)
    @info.save
    respond_with(@info)
  end

  def update
    @info.update(info_params)
    respond_with(@info)
  end

  def destroy
    @info.destroy
    respond_with(@info)
  end

  private
    def set_info
      @info = Info.find(params[:id])
    end

    def info_params
      params.require(:info).permit(:day, :size_min, :size_max, :swell_rating, :wind_direction, :wind_speed, :weather, :temperature, :chart_swell, :chart_period, :chart_wind, :probability, :location_id)
    end
end
