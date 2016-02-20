json.array! @benches do |bench|
  json.description bench.description
  json.latitude bench.lat
  json.longitude bench.lng
end
