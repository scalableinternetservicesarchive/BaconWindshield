class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :edit, :update, :destroy]
  respond_to :html, :xml, :json

  def index
    @favorites = Favorite.all
    #respond_with(@favorites)
    fresh_when(etag: [@favorites, current_user])
  end

  def show
    respond_with(@favorite)
  end

  def new
    @favorite = Favorite.new
    respond_with(@favorite)
  end

  def edit
    expire_action action: :show
  end

  def create
    loc = Location.find(params[:location_id])
    @favorite = Favorite.new(location_id: loc.id, user_id: current_user.id)
    @favorite.save
    respond_with(loc)
  end

  def update
    @favorite.update(favorite_params)
    respond_with(@favorite)
  end

  def destroy

    @favorite.destroy
    #favorite = Favorite.find_by_user_id_and_location_id()
    #favorite.destroy
    respond_with(@favorite)
  end

  private
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    def favorite_params
      params.require(:favorite).permit(:location_id, :user_id)
    end
end