require 'test_helper'

class NoteHandlingTest < ActionDispatch::IntegrationTest

  test "route setup is correct" do
    get "/"
    assert_response :success
    get "/notes"
    assert_response :success
  end

  test "notes get shown on the notes page" do
    note = notes(:one)
    visit notes_url
    assert has_content? note.text
  end

  test "notes get created via form" do
    visit notes_url
    fill_in 'Text', with: 'note creation test'
    fill_in 'Date', with: '12.12.12'
    click_button "Neue Notiz erstellen"
    assert_equal notes_path, current_path
    assert has_content? 'note creation test'
  end
end
