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

    @reservation = Reservation.new(time: time, date: date)

    if @reservation.save
      render json: reservations, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end
end
