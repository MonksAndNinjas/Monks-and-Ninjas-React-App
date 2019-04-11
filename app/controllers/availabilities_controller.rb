class AvailabilitiesController < ApplicationController
  def index
    @availabilities = Availability.all
    render(
      status: 200,
      json: @availabilities
    )
  end
end
