#require 'will_paginate/array'

class CountiesController < ApplicationController
  before_action :set_county, only: [:show, :edit, :update, :destroy]
  respond_to :js, :html
  helper_method :cache_key_for_counties
  #caches_action :show, expires_in: 24.hour
  def index
    @counties = County.all
    respond_with(@counties)
  end

  def show
    @infosList = Array.new 
    
    @entries = @county.locations 
    #@entries = @locations.paginate(page: params[:page], per_page: 20)
    #@locations.includes(:infos).each do |loc|
    #@locations.each do |loc| Fixed N + 1 querries
    #@infosList.push(loc.infos)
    #end
    
    #@entries = @locations.paginate(page: params[:page], per_page: 20)
    respond_with(@county)

  end
  
  def cache_key_for_counties
    counties_key = @county.cache_key
    first_entry_key = @entries.first.cache_key
    "#{counties_key}-#{first_entry_key}"
  end
  
  def new
    @county = County.new
    respond_with(@county)
  end

  def edit
    #expire_action action: :show
  end

  def create
    @county = County.new(county_params)
    @county.save
    respond_with(@county)
  end

  def update
    @county.update(county_params)
    respond_with(@county)
  end

  def destroy
    @county.destroy
    respond_with(@county)
  end

  private

  def set_county
    @county = County.find(params[:id])
  end

  def county_params
    params.require(:county).permit(:name)
  end
end
