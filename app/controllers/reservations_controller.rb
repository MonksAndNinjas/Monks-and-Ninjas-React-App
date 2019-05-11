class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
    render(
      status: 200,
      json: @reservations
    )
  end

  def create
    time = params["time"]
    date = params["date"]

    reservations = Reservation.all
    duplicate = reservations.where(time: time, date: date)

    if duplicate.length > 0
      render json: ["not available"]
    else
      @reservation = Reservation.new(time: time, date: date)

      if @reservation.save
        render json: @reservation, status: :created
      else
        render json: @reservation.errors, status: :unprocessable_entity
      end
    end
  end

end
