json.array!(@infos) do |info|
  json.extract! info, :id, :day, :hour, :shape, :shape_detail, :shape_full, :size, :location_id
  json.url info_url(info, format: :json)
end
