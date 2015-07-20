json.array!(@notes) do |note|
  json.extract! note, :id, :date, :text
  json.url note_url(note, format: :json)
end
