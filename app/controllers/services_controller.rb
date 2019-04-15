class ServicesController < ApplicationController
  def index
    @availabilities = Availability.all
    render(
      status: 200,
      json: @availabilities
    )
  end
end
