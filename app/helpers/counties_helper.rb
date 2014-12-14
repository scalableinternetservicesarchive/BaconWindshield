module CountiesHelper
  def counties_show
    @locations = @county.locations 
    #@entries = @locations.paginate(page: params[:page], per_page: 20)
    @entries = @locations
  end
end
