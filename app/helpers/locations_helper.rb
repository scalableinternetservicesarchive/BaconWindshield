module LocationsHelper
  def location_show
    begin
      @waves = @location.infos.paginate(page: params[:page], per_page: 8, total_entries: 40)
      #respond_with(@location)
    rescue Exception => msg
      puts msg
    end
    @windValues1 = [[1, "Light air", "#58ACFA"], [2, "Light breeze", "#A9D0F5"], [3, "Gentle breeze", "#58FAF4"], [4, "Moderate breeze", "#9FF781"], [5, "Fresh breeze", "#F4FA58"], [6, "Strong breeze", "#F5D0A9"]] 
    @windValues2 = [[7, "High wind", "#F7BE81"], [8, "Gale", "#FE642E"], [9, "Strong gale", "#FF0000"], [10, "Storm", "#B43104"], [11, "Violent storm", "#B40404"], [12, "Hurricane force", "#8A0808"]]
  end
  
  def location_index
    if params[:search]
      @locations = Location.search(params[:search]).order("created_at ASC")
    else
      @locations = Location.all.order('created_at ASC')
    end
    @entries = @locations.paginate(page: params[:page], per_page: 20)
  end
  
end
