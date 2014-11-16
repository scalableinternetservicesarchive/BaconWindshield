json.array!(@infos) do |info|
  json.extract! info, :id, :day, :size, :swell_rating, :wind, :probability
  json.url info_url(info, format: :json)
end
