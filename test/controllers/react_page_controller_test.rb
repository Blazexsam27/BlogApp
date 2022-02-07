require "test_helper"

class ReactPageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get react_page_index_url
    assert_response :success
  end
end
