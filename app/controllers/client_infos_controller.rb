class ClientInfosController < ApplicationController
  def index
    @client_infos = ClientInfo.all
    render(
      status: 200,
      json: @client_infos
    )
  end

  def create
#if @reservation.save
        render json: params, status: :created
  #    else
  #      render json: @reservation.errors, status: :unprocessable_entity
  #    end
  #  end
  end

end
