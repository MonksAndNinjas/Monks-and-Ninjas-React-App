class ServicesController < ApplicationController
  def index
    @services = Service.all
    render(
      status: 200,
      json: @services
    )
  end
end
