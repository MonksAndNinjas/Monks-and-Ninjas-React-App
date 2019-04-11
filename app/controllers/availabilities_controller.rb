class Availabilities < ApplicationController
  def index
    render(
      status: 200,
      json: Availability.all
    )
  end
end
