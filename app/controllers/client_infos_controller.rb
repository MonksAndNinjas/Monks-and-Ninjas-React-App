class ClientInfosController < ApplicationController
  def index
    @client_infos = ClientInfo.all
    render(
      status: 200,
      json: @client_infos
    )
  end

  def create
    name = params[:client][:name]
    phoneNumber = params[:client][:phoneNumber]
    email = params[:client][:email]
    time = params[:reservation][:time]
    date = params[:reservation][:date]

    client = ClientInfo.find_or_create_by(email: email)
    client.name = name
    client.phone = phoneNumber
    client.save

    reservations = Reservation.all
    duplicate = reservations.where(time: time, date: date)

    if duplicate.length > 0
      render json: ["not available"]
    else
      @reservation = client.reservations.build(time: time, date: date)

      if @reservation.save
        render json: { reservation: @reservation, client: client } , status: :created
      else
        render json: @reservation.errors, status: :unprocessable_entity
      end
    end
  end

end
