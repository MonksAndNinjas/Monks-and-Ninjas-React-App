class ClientInfosController < ApplicationController
  def index
    @client_infos = ClientInfo.all
    render(
      status: 200,
      json: @client_infos
    )
  end

  def create
    name = params[:name]
    phoneNumber = params[:phoneNumber]
    email = params[:email]
    time = params[:reservation][:time]
    date = params[:reservation][:date]
# searches by unique email
    client = ClientInfo.find_or_create_by(email: email)
    client.name = name
    client.phone = phoneNumber
    client.save
# checks for duplicate reservations even though list is filtered in TrainingContainer
    reservations = Reservation.all
    duplicate = reservations.where(time: time, date: date)
# is there a duplicate
    if duplicate.length > 0
      render json: ["not available"]
    else
      @reservation = client.reservations.build(time: time, date: date)

      if @reservation.save
        render json: { reservation: @reservation, client: client }, status: :created
      else
        render json: @reservation.errors, status: :unprocessable_entity
      end
    end
  end

end
