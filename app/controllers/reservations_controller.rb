class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
    render(
      status: 200,
      json: @reservations
    )
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy

    render json: {message: 'Reservation successfully deleted'}
  end

end
